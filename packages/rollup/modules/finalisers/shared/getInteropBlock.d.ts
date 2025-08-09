import type { ChunkDependency } from '../../Chunk';
import type { GetInterop } from '@rollup/types';
import type { GenerateCodeSnippets } from "@rollup/types";
export default function getInteropBlock(dependencies: readonly ChunkDependency[], interop: GetInterop, externalLiveBindings: boolean, freeze: boolean, symbols: boolean, accessedGlobals: Set<string>, indent: string, snippets: GenerateCodeSnippets): string;
