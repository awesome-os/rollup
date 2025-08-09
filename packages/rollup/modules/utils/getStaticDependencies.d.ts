import type Chunk from '../Chunk';
import type ExternalChunk from '../ExternalChunk';
import ExternalModule from '../ExternalModule';
import type Module from '../Module';
export declare function getStaticDependencies(chunk: Chunk, orderedModules: readonly Module[], chunkByModule: ReadonlyMap<Module, Chunk>, externalChunkByModule: ReadonlyMap<ExternalModule, ExternalChunk>): Set<Chunk | ExternalChunk>;
