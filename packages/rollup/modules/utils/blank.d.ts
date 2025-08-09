export declare const BLANK: Record<string, unknown>;
export declare const EMPTY_OBJECT: Readonly<{}>;
export declare const EMPTY_ARRAY: readonly never[];
export declare const EMPTY_SET: Readonly<{
    add(): never;
    clear(): void;
    delete(value: any): boolean;
    forEach(callbackfn: (value: any, value2: any, set: Set<any>) => void, thisArg?: any): void;
    has(value: any): boolean;
    readonly size: number;
    entries(): IterableIterator<[any, any]>;
    keys(): IterableIterator<any>;
    values(): IterableIterator<any>;
    [Symbol.iterator](): IterableIterator<any>;
    readonly [Symbol.toStringTag]: string;
}>;
