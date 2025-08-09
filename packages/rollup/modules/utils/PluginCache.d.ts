import type { PluginCache, SerializablePluginCache } from 'rollup';
export declare function createPluginCache(cache: SerializablePluginCache): PluginCache;
export declare function getTrackedPluginCache(pluginCache: PluginCache, onUse: () => void): PluginCache;
export declare const NO_CACHE: PluginCache;
export declare function getCacheForUncacheablePlugin(pluginName: string): PluginCache;
