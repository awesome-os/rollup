import type { InputOptions, InputPluginOption, LogHandler, LogLevelOption, NormalizedInputOptions, NormalizedJsxOptions, NormalizedOutputOptions, NormalizedTreeshakingOptions, OutputOptions, OutputPlugin, OutputPluginOption, Plugin, RollupLog } from 'rollup';
import type { ObjectOptionWithPresets } from '@rollup/types';
import type { ObjectValue } from "../../rollup/types";
export declare const getOnLog: (config: InputOptions, logLevel: LogLevelOption, printLog?: LogHandler) => NormalizedInputOptions["onLog"];
export declare const normalizeLog: (log: RollupLog | string | (() => RollupLog | string)) => RollupLog;
export declare function warnUnknownOptions(passedOptions: object, validOptions: readonly string[], optionType: string, log: LogHandler, ignoredKeys?: RegExp): void;
export declare const treeshakePresets: Record<NonNullable<ObjectValue<InputOptions['treeshake']>['preset']>, NormalizedTreeshakingOptions>;
export declare const jsxPresets: Record<NonNullable<ObjectValue<InputOptions['jsx']>['preset']>, NormalizedJsxOptions>;
export declare const generatedCodePresets: Record<NonNullable<ObjectValue<OutputOptions['generatedCode']>['preset']>, NormalizedOutputOptions['generatedCode']>;
export declare const objectifyOption: (value: unknown) => Record<string, unknown>;
export declare const objectifyOptionWithPresets: <T extends ObjectOptionWithPresets>(presets: Record<string, T>, optionName: string, urlSnippet: string, additionalValues: string) => (value: unknown) => Record<string, unknown>;
export declare const getOptionWithPreset: <T extends ObjectOptionWithPresets>(value: unknown, presets: Record<string, T>, optionName: string, urlSnippet: string, additionalValues: string) => T;
export declare const normalizePluginOption: {
    (plugins: InputPluginOption): Promise<Plugin[]>;
    (plugins: OutputPluginOption): Promise<OutputPlugin[]>;
    (plugins: unknown): Promise<any[]>;
};
