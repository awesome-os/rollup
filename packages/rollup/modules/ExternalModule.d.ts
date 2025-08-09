import ExternalVariable from './ast/variables/ExternalVariable';
import type { CustomPluginOptions, ModuleInfo, NormalizedInputOptions } from 'rollup';
export default class ExternalModule {
    private readonly options;
    readonly id: string;
    readonly renormalizeRenderPath: boolean;
    readonly dynamicImporters: string[];
    execIndex: number;
    readonly exportedVariables: Map<ExternalVariable, string>;
    readonly importers: string[];
    readonly info: ModuleInfo;
    reexported: boolean;
    suggestedVariableName: string;
    used: boolean;
    private readonly declarations;
    private mostCommonSuggestion;
    private readonly nameSuggestions;
    constructor(options: NormalizedInputOptions, id: string, moduleSideEffects: boolean | 'no-treeshake', meta: CustomPluginOptions, renormalizeRenderPath: boolean, attributes: Record<string, string>);
    cacheInfoGetters(): void;
    getVariableForExportName(name: string): [variable: ExternalVariable];
    suggestName(name: string): void;
    warnUnusedImports(): void;
}
