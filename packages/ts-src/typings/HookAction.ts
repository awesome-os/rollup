import type { PluginContext, Plugin } from '../packages/ts-src/src/rollup/types';


export type ReplaceContext = (context: PluginContext, plugin: Plugin) => PluginContext;

export type HookAction = [plugin: string, hook: string, args: unknown[]];
