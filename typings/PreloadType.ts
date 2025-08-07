import type { DynamicImport } from './Module';
import type { CustomPluginOptions, Plugin, ResolvedId, PartialNull, ModuleOptions } from './rollup/types';


export interface UnresolvedModule {
	fileName: string | null;
	id: string;
	importer: string | undefined;
	name: string | null;
}

export type ModuleLoaderResolveId = (
	source: string,
	importer: string | undefined,
	customOptions: CustomPluginOptions | undefined,
	isEntry: boolean | undefined,
	attributes: Record<string, string>,
	skip?: readonly { importer: string | undefined; plugin: Plugin; source: string; }[] | null
) => Promise<ResolvedId | null>;
export type NormalizedResolveIdWithoutDefaults = Partial<PartialNull<ModuleOptions>> & {
	external?: boolean | 'absolute';
	id: string;
	resolvedBy?: string;
};
export type ResolveStaticDependencyPromise = Promise<readonly [source: string, resolvedId: ResolvedId]>;
export type ResolveDynamicDependencyPromise = Promise<
	readonly [dynamicImport: DynamicImport, resolvedId: ResolvedId | string | null]
>;
export type LoadModulePromise = Promise<
	[
		resolveStaticDependencies: ResolveStaticDependencyPromise[],
		resolveDynamicDependencies: ResolveDynamicDependencyPromise[],
		loadAndResolveDependencies: Promise<void>
	]
>;
export type PreloadType = boolean | 'resolveDependencies';
