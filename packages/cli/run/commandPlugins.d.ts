import type { InputOptionsWithPlugins } from '../../src/rollup/types';
export declare function addCommandPluginsToInputOptions(inputOptions: InputOptionsWithPlugins, command: Record<string, unknown>): Promise<void>;
export declare function addPluginsFromCommandOption(commandPlugin: unknown, inputOptions: InputOptionsWithPlugins): Promise<void>;
