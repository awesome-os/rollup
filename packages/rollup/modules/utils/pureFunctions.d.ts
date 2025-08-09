import type { NormalizedInputOptions } from 'rollup';
export declare const PureFunctionKey: unique symbol;
export interface PureFunctions {
    [pathSegment: string]: PureFunctions;
    [PureFunctionKey]?: boolean;
}
export declare const getPureFunctions: ({ treeshake }: NormalizedInputOptions) => PureFunctions;
