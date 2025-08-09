import type { MergedRollupOptions } from '../../src/rollup/types';
import type { BatchWarnings } from './loadConfigFileType';
export default function loadConfigFromCommand(commandOptions: Record<string, unknown>, watchMode: boolean): Promise<{
    options: MergedRollupOptions[];
    warnings: BatchWarnings;
}>;
