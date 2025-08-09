import type { InputOptions, NormalizedInputOptions } from 'rollup';
export declare function normalizeInputOptions(config: InputOptions, watchMode: boolean): Promise<{
    options: NormalizedInputOptions;
    unsetOptions: Set<string>;
}>;
