import type Chunk from '../Chunk';
import type { LogHandler, NormalizedOutputOptions } from '@rollup/types';
export default function getExportMode(chunk: Chunk, { exports: exportMode, name, format }: NormalizedOutputOptions, facadeModuleId: string, log: LogHandler): 'default' | 'named' | 'none';
