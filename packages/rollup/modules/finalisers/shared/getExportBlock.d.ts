import type { ChunkDependency, ChunkExports } from '../../Chunk';
import type { GetInterop } from 'rollup';
import type { GenerateCodeSnippets } from '../../utils/generateCodeSnippets';
export declare function getExportBlock(exports: ChunkExports, dependencies: readonly ChunkDependency[], namedExportsMode: boolean, interop: GetInterop, snippets: GenerateCodeSnippets, t: string, externalLiveBindings: boolean, reexportProtoFromExternal: boolean, mechanism?: string): string;
export declare function getNamespaceMarkers(hasNamedExports: boolean, addEsModule: boolean, addNamespaceToStringTag: boolean, { _, getObject }: GenerateCodeSnippets): string;
