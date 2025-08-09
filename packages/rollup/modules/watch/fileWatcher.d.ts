import type { ChokidarOptions } from '@rollup/types';
import type { Task } from './watch';
export declare class FileWatcher {
    private readonly chokidarOptions;
    private readonly task;
    private readonly transformWatchers;
    private readonly watcher;
    constructor(task: Task, chokidarOptions: ChokidarOptions);
    close(): void;
    unwatch(id: string): void;
    watch(id: string, isTransformDependency: boolean): void;
    private createWatcher;
}
