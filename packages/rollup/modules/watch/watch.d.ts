import type { ChangeEvent, MergedRollupOptions, RollupCache, RollupWatcher } from '@rollup/types';
export declare class Watcher {
    readonly emitter: RollupWatcher;
    private buildDelay;
    private buildTimeout;
    private closed;
    private readonly invalidatedIds;
    private rerun;
    private running;
    private readonly tasks;
    constructor(optionsList: readonly MergedRollupOptions[], emitter: RollupWatcher);
    close(): Promise<void>;
    invalidate(file?: {
        event: ChangeEvent;
        id: string;
    }): void;
    private run;
}
export declare class Task {
    cache: RollupCache;
    watchFiles: string[];
    private closed;
    private readonly fileWatcher;
    private filter;
    private invalidated;
    private readonly options;
    private readonly outputFiles;
    private readonly outputs;
    private skipWrite;
    private watched;
    private readonly watcher;
    private readonly watchOptions;
    constructor(watcher: Watcher, options: MergedRollupOptions);
    close(): void;
    invalidate(id: string, details: {
        event: ChangeEvent;
        isTransformDependency?: boolean;
    }): void;
    run(): Promise<void>;
    private updateWatchedFiles;
    private watchFile;
}
