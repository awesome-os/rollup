import type { PluginDriver } from './PluginDriver';
export declare function catchUnfinishedHookActions<T>(pluginDriver: PluginDriver, callback: () => Promise<T>): Promise<T>;
