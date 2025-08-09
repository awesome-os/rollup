import type { ChunkDependency } from '../../Chunk';
import type { GetInterop } from 'rollup';
import type { GenerateCodeSnippets } from '../../utils/generateCodeSnippets';
export default function getInteropBlock(dependencies: readonly ChunkDependency[], interop: GetInterop, externalLiveBindings: boolean, freeze: boolean, symbols: boolean, accessedGlobals: Set<string>, indent: string, snippets: GenerateCodeSnippets): string;
