import type Graph from './Graph';
import type { NormalizedInputOptions, NormalizedOutputOptions, OutputBundle } from 'rollup';
import type { PluginDriver } from './utils/PluginDriver';
export default class Bundle {
    private readonly outputOptions;
    private readonly unsetOptions;
    private readonly inputOptions;
    private readonly pluginDriver;
    private readonly graph;
    private readonly facadeChunkByModule;
    private readonly includedNamespaces;
    constructor(outputOptions: NormalizedOutputOptions, unsetOptions: ReadonlySet<string>, inputOptions: NormalizedInputOptions, pluginDriver: PluginDriver, graph: Graph);
    generate(isWrite: boolean): Promise<OutputBundle>;
    private addManualChunks;
    private assignManualChunks;
    private finaliseAssets;
    private generateChunks;
}
