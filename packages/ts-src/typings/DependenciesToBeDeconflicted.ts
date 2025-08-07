import type Chunk from '../src/Chunk';
import type ExternalChunk from '../src/ExternalChunk';

export type DependenciesToBeDeconflicted = {
	deconflictedDefault: ReadonlySet<ExternalChunk>;
	deconflictedNamespace: ReadonlySet<Chunk | ExternalChunk>;
	dependencies: ReadonlySet<Chunk | ExternalChunk>;
};
