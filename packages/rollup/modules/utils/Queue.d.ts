type Task<T> = () => Promise<T>;
export default class Queue {
    private readonly queue;
    private workerCount;
    private maxParallel;
    constructor(maxParallel: number);
    run<T>(task: Task<T>): Promise<T>;
    private work;
}
export {};
