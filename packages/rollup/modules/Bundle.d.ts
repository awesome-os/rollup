import type { NormalizedInputOptions, NormalizedOutputOptions, OutputBundle } from '@rollup/types';
import type Graph from './Graph';
import type { PluginDriver } from './utils/PluginDriver';
export default class Bundle {
    private readonly facadeChunkByModule;
    private readonly includedNamespaces;
    outputOptions: NormalizedOutputOptions;
    unsetOptions: ReadonlySet<string>;
    inputOptions: NormalizedInputOptions;
    pluginDriver: PluginDriver;
    graph: Graph;
    constructor(outputOptions: NormalizedOutputOptions, unsetOptions: ReadonlySet<string>, inputOptions: NormalizedInputOptions, pluginDriver: PluginDriver, graph: Graph);
    generate(isWrite: boolean): Promise<OutputBundle>;
    private addManualChunks;
    private assignManualChunks;
    private finaliseAssets;
    private generateChunks;
}
