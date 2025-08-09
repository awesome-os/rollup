import type { NormalizedInputOptions, NormalizedOutputOptions, OutputOptions } from 'rollup';
export declare function normalizeOutputOptions(config: OutputOptions, inputOptions: NormalizedInputOptions, unsetInputOptions: ReadonlySet<string>): Promise<{
    options: NormalizedOutputOptions;
    unsetOptions: Set<string>;
}>;
