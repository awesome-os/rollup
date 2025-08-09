import type { InputOptions, LogHandler, MergedRollupOptions, RollupOptions } from 'rollup';
import type { GenericConfigObject } from "@rollup/types";
export declare const commandAliases: Record<string, string>;
export declare function mergeOptions(config: RollupOptions, watchMode: boolean, rawCommandOptions?: GenericConfigObject, printLog?: LogHandler): Promise<MergedRollupOptions>;
export declare const getWatch: (config: InputOptions, overrides: InputOptions) => any;
export declare const isWatchEnabled: (optionValue: unknown) => boolean;
export declare const normalizeObjectOptionValue: (optionValue: unknown, objectifyValue: (value: unknown) => Record<string, unknown> | undefined) => Record<string, unknown> | undefined;
