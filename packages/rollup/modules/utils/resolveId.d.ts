import type { ModuleLoaderResolveId } from '@rollup/types';
import type { CustomPluginOptions, Plugin, ResolveIdResult, RollupFsModule } from '@rollup/types';
import type { PluginDriver } from './PluginDriver';
export declare function resolveId(source: string, importer: string | undefined, preserveSymlinks: boolean, pluginDriver: PluginDriver, moduleLoaderResolveId: ModuleLoaderResolveId, skip: readonly {
    importer: string | undefined;
    plugin: Plugin;
    source: string;
}[] | null, customOptions: CustomPluginOptions | undefined, isEntry: boolean, attributes: Record<string, string>, fs: RollupFsModule): Promise<ResolveIdResult>;
