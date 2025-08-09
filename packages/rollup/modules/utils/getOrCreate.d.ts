export declare function getOrCreate<K extends object, V>(map: Map<K, V> | WeakMap<K, V>, key: K, init: () => V): V;
export declare function getOrCreate<K, V>(map: Map<K, V>, key: K, init: () => V): V;
export declare function getNewSet<T>(): Set<T>;
export declare function getNewArray<T>(): T[];
