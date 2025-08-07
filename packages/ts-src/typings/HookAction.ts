import type { Plugin, PluginContext } from 'rollup';

export type ReplaceContext = (context: PluginContext, plugin: Plugin) => PluginContext;

export type HookAction = [plugin: string, hook: string, args: unknown[]];
