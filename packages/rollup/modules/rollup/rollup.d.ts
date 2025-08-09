import type { RollupBuild, RollupOptions, RollupOptionsFunction, RollupWatcher } from '@rollup/types';
export declare function rollup(rawInputOptions: RollupOptions): Promise<RollupBuild>;
export declare function rollupInternal(rawInputOptions: RollupOptions, watcher: RollupWatcher | null): Promise<RollupBuild>;
/**
 * Auxiliary functions for defining rollup configuration
 * Mainly to facilitate IDE code prompts, after all, export default does not
 * prompt, even if you add @type annotations, it is not accurate
 * @param options
 */
export declare function defineConfig<T extends RollupOptions | RollupOptions[] | RollupOptionsFunction>(options: T): T;
export declare const useConfigs: (rollupConfigs: RollupOptions | ConcatArray<RollupOptions> | (() => RollupOptions | ConcatArray<RollupOptions>)) => Promise<RollupOptions[]>;
