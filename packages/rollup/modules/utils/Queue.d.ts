type Task<T> = () => Promise<T>;
export default class Queue {
    private maxParallel;
    private readonly queue;
    private workerCount;
    constructor(maxParallel: number);
    run<T>(task: Task<T>): Promise<T>;
    private work;
}
export {};
