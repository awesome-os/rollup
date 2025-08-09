import type ExternalModule from './ExternalModule';
import type { NormalizedOutputOptions } from 'rollup';
import type { GenerateCodeSnippets } from './utils/generateCodeSnippets';
export default class ExternalChunk {
    private options;
    private inputBase;
    defaultVariableName: string;
    id: string;
    namespaceVariableName: string;
    suggestedVariableName: string;
    variableName: string;
    private fileName;
    private importAttributes;
    private moduleInfo;
    private renormalizeRenderPath;
    constructor(module: ExternalModule, options: NormalizedOutputOptions, inputBase: string);
    getFileName(): string;
    getImportAttributes(snippets: GenerateCodeSnippets): string | null;
    getImportPath(importer: string): string;
}
export declare function formatAttributes(attributes: Record<string, string> | null | void | false, { getObject }: GenerateCodeSnippets): string | null;
