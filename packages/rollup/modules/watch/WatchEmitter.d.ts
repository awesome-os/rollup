import type { AwaitedEventListener, AwaitingEventEmitter } from '@rollup/types';
export declare class WatchEmitter<T extends Record<string, (...parameters: any) => any>> implements AwaitingEventEmitter<T> {
    private currentHandlers;
    private persistentHandlers;
    close(): Promise<void>;
    emit<K extends keyof T>(event: K, ...parameters: Parameters<T[K]>): Promise<unknown>;
    off<K extends keyof T>(event: K, listener: AwaitedEventListener<T, K>): this;
    on<K extends keyof T>(event: K, listener: AwaitedEventListener<T, K>): this;
    onCurrentRun<K extends keyof T>(event: K, listener: AwaitedEventListener<T, K>): this;
    once<K extends keyof T>(event: K, listener: AwaitedEventListener<T, K>): this;
    removeAllListeners(): this;
    removeListenersForCurrentRun(): this;
    private getCurrentHandlers;
    private getPersistentHandlers;
}
