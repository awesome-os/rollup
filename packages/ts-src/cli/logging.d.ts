import type { RollupError } from '@rollup/types';
export declare const stderr: (...parameters: readonly unknown[]) => boolean;
export declare function handleError(error: RollupError, recover?: boolean): void;
