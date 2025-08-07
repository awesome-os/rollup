import type { Plugin, PluginContext } from '../src/rollup/types';

export type ReplaceContext = (context: PluginContext, plugin: Plugin) => PluginContext;

export type HookAction = [plugin: string, hook: string, args: unknown[]];
