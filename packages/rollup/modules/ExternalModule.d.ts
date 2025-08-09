import type { CustomPluginOptions, ModuleInfo, NormalizedInputOptions } from '@rollup/types';
import { ExternalVariable } from './ast/variables/ExternalVariable';
export default class ExternalModule {
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
    private readonly options;
    readonly id: string;
    readonly renormalizeRenderPath: boolean;
    constructor(options: NormalizedInputOptions, id: string, moduleSideEffects: boolean | 'no-treeshake', meta: CustomPluginOptions, renormalizeRenderPath: boolean, attributes: Record<string, string>);
    cacheInfoGetters(): void;
    getVariableForExportName(name: string): [variable: ExternalVariable];
    suggestName(name: string): void;
    warnUnusedImports(): void;
}
