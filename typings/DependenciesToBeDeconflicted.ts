import type Chunk from '../Chunk';
import ExternalChunk from '../ExternalChunk';


export type DependenciesToBeDeconflicted = {
	deconflictedDefault: ReadonlySet<ExternalChunk>;
	deconflictedNamespace: ReadonlySet<Chunk | ExternalChunk>;
	dependencies: ReadonlySet<Chunk | ExternalChunk>;
};
