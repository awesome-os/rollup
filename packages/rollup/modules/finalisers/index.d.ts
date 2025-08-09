import type { Bundle as MagicStringBundle } from 'magic-string';
import type { ChunkDependency, ChunkExports } from '../Chunk';
import type { LogHandler, NormalizedOutputOptions } from '@rollup/types';
import type { GenerateCodeSnippets } from "@rollup/types";
export interface FinaliserOptions {
    accessedGlobals: Set<string>;
    dependencies: ChunkDependency[];
    exports: ChunkExports;
    hasDefaultExport: boolean;
    hasExports: boolean;
    id: string;
    indent: string;
    intro: string;
    isEntryFacade: boolean;
    isModuleFacade: boolean;
    log: LogHandler;
    namedExportsMode: boolean;
    outro: string;
    snippets: GenerateCodeSnippets;
    usesTopLevelAwait: boolean;
}
export type Finaliser = (magicString: MagicStringBundle, finaliserOptions: FinaliserOptions, options: NormalizedOutputOptions) => void;
declare const _default: Record<string, Finaliser>;
export default _default;
