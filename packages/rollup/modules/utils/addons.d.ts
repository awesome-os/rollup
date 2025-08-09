import type { Addons, NormalizedOutputOptions, RenderedChunk } from '@rollup/types';
import type { PluginDriver } from './PluginDriver';
export declare function createAddons(options: NormalizedOutputOptions, outputPluginDriver: PluginDriver, chunk: RenderedChunk): Promise<Addons>;
