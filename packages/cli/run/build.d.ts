import type { MergedRollupOptions } from '../../src/rollup/types';
import type { BatchWarnings } from './loadConfigFileType';
export default function build(inputOptions: MergedRollupOptions, warnings: BatchWarnings, silent?: boolean): Promise<unknown>;
