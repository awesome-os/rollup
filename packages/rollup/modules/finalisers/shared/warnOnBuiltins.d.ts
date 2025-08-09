import type { ChunkDependency } from '../../Chunk';
import type { LogHandler } from 'rollup';
export default function warnOnBuiltins(log: LogHandler, dependencies: readonly ChunkDependency[]): void;
