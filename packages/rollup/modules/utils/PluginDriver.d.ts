import type Chunk from '../Chunk';
import type Graph from '../Graph';
import type Module from '../Module';
import type { AddonHookFunction, AddonHooks, AsyncPluginHooks, EmitFile, FirstPluginHooks, FunctionPluginHooks, NormalizedInputOptions, NormalizedOutputOptions, ParallelPluginHooks, Plugin, SequentialPluginHooks, SerializablePluginCache, SyncPluginHooks } from 'rollup';
import { HookAction, ReplaceContext } from '@rollup/types';
import type { OutputBundleWithPlaceholders } from './outputBundle';
/**
 * Get the type of the first argument in a function.
 * @example Arg0<(a: string, b: number) => void> -> string
 */
type Argument0<H extends keyof FunctionPluginHooks> = Parameters<FunctionPluginHooks[H]>[0];
export declare class PluginDriver {
    private readonly graph;
    private readonly options;
    private readonly pluginCache;
    readonly emitFile: EmitFile;
    finaliseAssets: () => void;
    getFileName: (fileReferenceId: string) => string;
    readonly setChunkInformation: (facadeChunkByModule: ReadonlyMap<Module, Chunk>) => void;
    readonly setOutputBundle: (bundle: OutputBundleWithPlaceholders, outputOptions: NormalizedOutputOptions) => void;
    private readonly fileEmitter;
    private readonly pluginContexts;
    private readonly plugins;
    private readonly sortedPlugins;
    private readonly unfulfilledActions;
    private readonly compiledPluginFilters;
    constructor(graph: Graph, options: NormalizedInputOptions, userPlugins: readonly Plugin[], pluginCache: Record<string, SerializablePluginCache> | undefined, basePluginDriver?: PluginDriver);
    createOutputPluginDriver(plugins: readonly Plugin[]): PluginDriver;
    getUnfulfilledHookActions(): Set<HookAction>;
    hookFirst<H extends AsyncPluginHooks & FirstPluginHooks>(hookName: H, parameters: Parameters<FunctionPluginHooks[H]>, replaceContext?: ReplaceContext | null, skipped?: ReadonlySet<Plugin> | null): Promise<ReturnType<FunctionPluginHooks[H]> | null>;
    hookFirstAndGetPlugin<H extends AsyncPluginHooks & FirstPluginHooks>(hookName: H, parameters: Parameters<FunctionPluginHooks[H]>, replaceContext?: ReplaceContext | null, skipped?: ReadonlySet<Plugin> | null): Promise<[NonNullable<ReturnType<FunctionPluginHooks[H]>>, Plugin] | null>;
    hookFirstSync<H extends SyncPluginHooks & FirstPluginHooks>(hookName: H, parameters: Parameters<FunctionPluginHooks[H]>, replaceContext?: ReplaceContext): ReturnType<FunctionPluginHooks[H]> | null;
    hookParallel<H extends AsyncPluginHooks & ParallelPluginHooks>(hookName: H, parameters: Parameters<FunctionPluginHooks[H]>, replaceContext?: ReplaceContext): Promise<void>;
    hookReduceArg0<H extends AsyncPluginHooks & SequentialPluginHooks>(hookName: H, [argument0, ...rest]: Parameters<FunctionPluginHooks[H]>, reduce: (reduction: Argument0<H>, result: ReturnType<FunctionPluginHooks[H]>, plugin: Plugin) => Argument0<H>, replaceContext?: ReplaceContext): Promise<Argument0<H>>;
    hookReduceArg0Sync<H extends SyncPluginHooks & SequentialPluginHooks>(hookName: H, [argument0, ...rest]: Parameters<FunctionPluginHooks[H]>, reduce: (reduction: Argument0<H>, result: ReturnType<FunctionPluginHooks[H]>, plugin: Plugin) => Argument0<H>, replaceContext?: ReplaceContext): Argument0<H>;
    hookReduceValue<H extends AddonHooks>(hookName: H, initialValue: string | Promise<string>, parameters: Parameters<AddonHookFunction>, reducer: (result: string, next: string) => string): Promise<string>;
    hookReduceValueSync<H extends SyncPluginHooks & SequentialPluginHooks, T>(hookName: H, initialValue: T, parameters: Parameters<FunctionPluginHooks[H]>, reduce: (reduction: T, result: ReturnType<FunctionPluginHooks[H]>, plugin: Plugin) => T, replaceContext?: ReplaceContext): T;
    hookSeq<H extends AsyncPluginHooks & SequentialPluginHooks>(hookName: H, parameters: Parameters<FunctionPluginHooks[H]>, replaceContext?: ReplaceContext): Promise<void>;
    private getSortedPlugins;
    /**
     * Run an async plugin hook and return the result.
     * @param hookName Name of the plugin hook. Must be either in `PluginHooks`
     *   or `OutputPluginValueHooks`.
     * @param args Arguments passed to the plugin hook.
     * @param plugin The actual pluginObject to run.
     * @param replaceContext When passed, the plugin context can be overridden.
     */
    private runHook;
    /**
     * Run a sync plugin hook and return the result.
     * @param hookName Name of the plugin hook. Must be in `PluginHooks`.
     * @param args Arguments passed to the plugin hook.
     * @param plugin The acutal plugin
     * @param replaceContext When passed, the plugin context can be overridden.
     */
    private runHookSync;
}
export declare function getSortedValidatedPlugins(hookName: keyof FunctionPluginHooks | AddonHooks, plugins: readonly Plugin[], validateHandler?: typeof validateFunctionPluginHandler): Plugin[];
declare function validateFunctionPluginHandler(handler: unknown, hookName: string, plugin: Plugin): void;
export {};
