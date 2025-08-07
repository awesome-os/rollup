import type Chunk from '../packages/ts-src/src/Chunk';
import ExternalChunk from '../packages/ts-src/src/ExternalChunk';


export type DependenciesToBeDeconflicted = {
	deconflictedDefault: ReadonlySet<ExternalChunk>;
	deconflictedNamespace: ReadonlySet<Chunk | ExternalChunk>;
	dependencies: ReadonlySet<Chunk | ExternalChunk>;
};
