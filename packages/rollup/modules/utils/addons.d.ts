import type { Addons } from "../rollup/types";
import type { NormalizedOutputOptions, RenderedChunk } from 'rollup';
import type { PluginDriver } from './PluginDriver';
export declare function createAddons(options: NormalizedOutputOptions, outputPluginDriver: PluginDriver, chunk: RenderedChunk): Promise<Addons>;
