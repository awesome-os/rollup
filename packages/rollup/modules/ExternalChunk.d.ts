import type { NormalizedOutputOptions } from '@rollup/types';
import type ExternalModule from './ExternalModule';
import type { GenerateCodeSnippets } from "@rollup/types";
export default class ExternalChunk {
    defaultVariableName: string;
    id: string;
    namespaceVariableName: string;
    suggestedVariableName: string;
    variableName: string;
    private fileName;
    private importAttributes;
    private moduleInfo;
    private renormalizeRenderPath;
    private options;
    private inputBase;
    constructor(module: ExternalModule, options: NormalizedOutputOptions, inputBase: string);
    getFileName(): string;
    getImportAttributes(snippets: GenerateCodeSnippets): string | null;
    getImportPath(importer: string): string;
}
export declare function formatAttributes(attributes: Record<string, string> | null | void | false, { getObject }: GenerateCodeSnippets): string | null;
