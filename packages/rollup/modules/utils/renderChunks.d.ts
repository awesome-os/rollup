import type { LogHandler, NormalizedOutputOptions } from 'rollup';
import type { default as Chunk } from '../Chunk';
import type { OutputBundleWithPlaceholders } from './outputBundle';
import type { PluginDriver } from './PluginDriver';
export declare function renderChunks(chunks: Chunk[], bundle: OutputBundleWithPlaceholders, pluginDriver: PluginDriver, outputOptions: NormalizedOutputOptions, log: LogHandler): Promise<void>;
