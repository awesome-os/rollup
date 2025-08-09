import type { PluginDriver } from '../../src/utils/PluginDriver';
export declare function catchUnfinishedHookActions<T>(_pluginDriver: PluginDriver, callback: () => Promise<T>): Promise<T>;
