import type Module from '../Module';
import type { LogHandler, SourceDescription, TransformModuleJSON } from 'rollup';
import type { PluginDriver } from './PluginDriver';
export default function transform(source: SourceDescription, module: Module, pluginDriver: PluginDriver, log: LogHandler): Promise<TransformModuleJSON>;
