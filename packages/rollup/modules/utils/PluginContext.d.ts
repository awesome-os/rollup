import type { NormalizedInputOptions, Plugin, PluginContext, SerializablePluginCache } from 'rollup';
import type Graph from '../Graph';
import type { FileEmitter } from './FileEmitter';
export declare function getPluginContext(plugin: Plugin, pluginCache: Record<string, SerializablePluginCache> | void, graph: Graph, options: NormalizedInputOptions, fileEmitter: FileEmitter, existingPluginNames: Set<string>): PluginContext;
