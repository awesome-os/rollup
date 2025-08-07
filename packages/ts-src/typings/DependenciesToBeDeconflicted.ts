import type Chunk from '../src/Chunk';
import type ExternalChunk from '../src/ExternalChunk';

export interface DependenciesToBeDeconflicted {
	deconflictedDefault: ReadonlySet<ExternalChunk>;
	deconflictedNamespace: ReadonlySet<Chunk | ExternalChunk>;
	dependencies: ReadonlySet<Chunk | ExternalChunk>;
}
