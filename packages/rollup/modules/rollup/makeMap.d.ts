export declare const SortingFileTypeArray: readonly ["ENTRY_CHUNK", "SECONDARY_CHUNK", "ASSET"];
export declare const makeMap: <const T extends readonly string[]>(array: T) => { [I in Extract<keyof T, `${number}`> as T[I]]: I extends `${infer N extends number}` ? N : never; };
export type NumberFromString<S extends string> = S extends `${infer N extends number}` ? N : never;
export type Indices<T extends readonly any[]> = Exclude<keyof T, keyof any[]> extends infer K ? K extends `${number}` ? NumberFromString<K> : never : never;
export declare const makeEnum2: <const T extends readonly string[]>(array: T) => { readonly [K in T[number]]: { [I in Indices<T>]: T[I] extends K ? I : never; }[Indices<T>]; } & { readonly [K in Indices<T>]: T[K]; };
export declare const makeEnum3: <T extends readonly string[]>(array: T) => { readonly [K in Extract<keyof T, `${number}`>]: T[number & K]; } & Readonly<Record<T[number], number>>;
/** short and precise
 * Creates a bi-directional enum mapping with exact numeric literals as values.
 *
 * @param array - readonly array of unique string keys
 * @returns enum-like object mapping keys to exact numeric literals and numeric keys back to strings
 */
export declare const makeEnum: <const T extends readonly string[]>(array: T) => { readonly [K in T[number]]: Extract<T, readonly [K]> extends readonly [K] ? T extends readonly [...infer R, K] ? R["length"] : 0 : never; } & Readonly<Record<number, T[number]>>;
export type IndexMap<T extends readonly string[]> = {
    [K in keyof T as T[K] & string]: K extends `${number}` ? NumberFromString<K> : never;
};
