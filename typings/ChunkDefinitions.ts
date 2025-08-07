import Module from '../Module';

export type ChunkDefinitions = { alias: string | null; modules: Module[]; }[];
export interface ModulesWithDependentEntries {
	/**
	 * The indices of the entries depending on this chunk
	 */
	dependentEntries: Set<number>;
	modules: Module[];
}
export interface ChunkDescription extends ModulesWithDependentEntries {
	/**
	 * These are the atoms (=initial chunks) that are contained in this chunk
	 */
	containedAtoms: bigint;
	/**
	 * The signatures of all atoms that are included in or loaded with this
	 * chunk. This is the intersection of all dependent entry modules. As chunks
	 * are merged, these sets are intersected.
	 */
	correlatedAtoms: bigint;
	dependencies: Set<ChunkDescription>;
	dependentChunks: Set<ChunkDescription>;
	pure: boolean;
	size: number;
}
export interface ChunkPartition {
	big: Set<ChunkDescription>;
	small: Set<ChunkDescription>;
}
