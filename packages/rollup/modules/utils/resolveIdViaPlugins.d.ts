import type { ModuleLoaderResolveId } from '@rollup/types';
import type { CustomPluginOptions, Plugin, ResolveIdResult } from 'rollup';
import type { PluginDriver } from './PluginDriver';
export declare function resolveIdViaPlugins(source: string, importer: string | undefined, pluginDriver: PluginDriver, moduleLoaderResolveId: ModuleLoaderResolveId, skip: readonly {
    importer: string | undefined;
    plugin: Plugin;
    source: string;
}[] | null, customOptions: CustomPluginOptions | undefined, isEntry: boolean, attributes: Record<string, string>): Promise<[NonNullable<ResolveIdResult>, Plugin] | null>;
