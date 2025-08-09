import type { ChunkDefinitions, LogHandler } from 'rollup';
import Module from '../Module';
/**
 * At its core, the algorithm first starts from each static or dynamic entry
 * point and then assigns that entry point to all modules than can be reached
 * via static imports. We call this the *dependent entry points* of that
 * module.
 *
 * Then we group all modules with the same dependent entry points into chunks
 * as those modules will always be loaded together.
 *
 * One non-trivial optimization we can apply is that dynamic entries are
 * different from static entries in so far as when a dynamic import occurs,
 * some modules are already in memory. If some of these modules are also
 * dependencies of the dynamic entry, then it does not make sense to create a
 * separate chunk for them. Instead, the dynamic import target can load them
 * from the importing chunk.
 *
 * With regard to chunking, if B is implicitly loaded after A, then this can be
 * handled the same way as if there was a dynamic import A => B.
 *
 * Example:
 * Assume A -> B (A imports B), A => C (A dynamically imports C) and C -> B.
 * Then the initial algorithm would assign A into the A chunk, C into the C
 * chunk and B into the AC chunk, i.e. the chunk with the dependent entry
 * points A and C.
 * However we know that C can only be loaded from A, so A and its dependency B
 * must already be in memory when C is loaded. So it is enough to create only
 * two chunks A containing [AB] and C containing [C].
 *
 * So we do not assign the dynamic entry C as dependent entry point to modules
 * that are already loaded.
 *
 * In a more complex example, let us assume that we have entry points X and Y.
 * Further, let us assume
 * X -> A, X -> B, X -> C,
 * Y -> A, Y -> B,
 * A => D,
 * D -> B, D -> C
 * So without dynamic import optimization, the dependent entry points are
 * A: XY, B: DXY, C: DX, D: D, X: X, Y: Y, so we would for now create six
 * chunks.
 *
 * Now D is loaded only after A is loaded. But A is loaded if either X is
 * loaded or Y is loaded. So the modules that are already in memory when D is
 * loaded are the intersection of all modules that X depends on with all
 * modules that Y depends on, which in this case are the modules A and B.
 * We could also say they are all modules that have both X and Y as dependent
 * entry points.
 *
 * So we can remove D as dependent entry point from A and B, which means they
 * both now have only XY as dependent entry points and can be merged into the
 * same chunk.
 *
 * Now let us extend this to the most general case where we have several
 * dynamic importers for one dynamic entry point.
 *
 * In the most general form, it works like this:
 * For each dynamic entry point, we have a number of dynamic importers, which
 * are the modules importing it. Using the previous ideas, we can determine
 * the modules already in memory for each dynamic importer by looking for all
 * modules that have all the dependent entry points of the dynamic importer as
 * dependent entry points.
 * So the modules that are guaranteed to be in memory when the dynamic entry
 * point is loaded are the intersection of the modules already in memory for
 * each dynamic importer.
 *
 * Assuming that A => D and B => D and A has dependent entry points XY and B
 * has dependent entry points YZ, then the modules guaranteed to be in memory
 * are all modules that have at least XYZ as dependent entry points.
 * We call XYZ the *dynamically dependent entry points* of D.
 *
 * Now there is one last case to consider: If one of the dynamically dependent
 * entries is itself a dynamic entry, then any module is in memory that either
 * is a dependency of that dynamic entry or again has the dynamic dependent
 * entries of that dynamic entry as dependent entry points.
 *
 * A naive algorithm for this proved to be costly as it contained an O(n^3)
 * complexity with regard to dynamic entries that blew up for very large
 * projects.
 *
 * If we have an efficient way to do Set operations, an alternative approach
 * would be to instead collect already loaded modules per dynamic entry. And as
 * all chunks from the initial grouping would behave the same, we can instead
 * collect already loaded chunks for a performance improvement.
 *
 * To do that efficiently, need
 * - a Map of dynamic imports per dynamic entry, which contains all dynamic
 *   imports that can be triggered by a dynamic entry
 * - a Map of static dependencies per entry
 * - a Map of already loaded chunks per entry that we initially populate with
 *   empty Sets for static entries and Sets containing all entries for dynamic
 *   entries
 *
 * For efficient operations, we assign each entry a numerical index and
 * represent Sets of Chunks as BigInt values where each chunk corresponds to a
 * bit index. Then the last two maps can be represented as arrays of BigInt
 * values.
 *
 * Then we iterate through each dynamic entry. We set the already loaded modules
 * to the intersection of the previously already loaded modules with the union
 * of the already loaded modules of that chunk with its static dependencies.
 *
 * If the already loaded modules changed, then we use the Map of dynamic imports
 * per dynamic entry to marks all dynamic entry dependencies as "dirty" and put
 * them back into the iteration. As an additional optimization, we note for
 * each dynamic entry which dynamic dependent entries have changed and only
 * intersect those entries again on subsequent interations.
 *
 * Then we remove the dynamic entries from the list of dependent entries for
 * those chunks that are already loaded for that dynamic entry and create
 * another round of chunks.
 */
export declare function getChunkAssignments(entries: readonly Module[], manualChunkAliasByEntry: ReadonlyMap<Module, string>, minChunkSize: number, log: LogHandler): ChunkDefinitions;
