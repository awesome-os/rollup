// eslint-disable-next-line prettier/prettier
export const SortingFileTypeArray = /** @type {const} */ ([
	'ENTRY_CHUNK',
	'SECONDARY_CHUNK',
	'ASSET'
	// eslint-disable-next-line prettier/prettier
]) as const;

// TODO: Replace all enums in code with the best variant for the coder.

export const makeMap = <const T extends readonly string[]>(array: T) =>
	Object.fromEntries(array.map((name, index) => [name, index])) as {
		[I in Extract<keyof T, `${number}`> as T[I]]: I extends `${infer N extends number}` ? N : never;
	};

// TODO: make numbers get better infered

// /**
//  * Gets a union of numeric literal indices of tuple T, e.g. 0 | 1 | 2
//  * Converts string indices (keys of tuple) to numeric literal types
//  */
export type NumberFromString<S extends string> = S extends `${infer N extends number}` ? N : never;
export type Indices<T extends readonly any[]> =
	Exclude<keyof T, keyof any[]> extends infer K
		? K extends `${number}`
			? NumberFromString<K>
			: never
		: never;

export const makeEnum2 = <const T extends readonly string[]>(array: T) => {
	const entries = array.flatMap((name, index) => [
		[name, index],
		[index, name]
	]);
	return Object.fromEntries(entries) as {
		readonly [K in T[number]]: {
			[I in Indices<T>]: T[I] extends K ? I : never;
		}[Indices<T>];
	} & {
		readonly [K in Indices<T>]: T[K];
	};
};

export const makeEnum3 = <T extends readonly string[]>(array: T) => {
	const entries = array.flatMap((name, index) => [
		[name, index],
		[index.toString(), name]
	]);
	return Object.fromEntries(entries) as {
		readonly [K in Extract<keyof T, `${number}`>]: T[number & K];
	} & Readonly<Record<T[number], number>>;
};

/** short and precise
 * Creates a bi-directional enum mapping with exact numeric literals as values.
 *
 * @param array - readonly array of unique string keys
 * @returns enum-like object mapping keys to exact numeric literals and numeric keys back to strings
 */
export const makeEnum = <const T extends readonly string[]>(array: T) => {
	const entries = array.flatMap((name, index) => [
		[name, index],
		[index, name]
	]);
	return Object.fromEntries(entries) as {
		readonly [K in T[number]]: Extract<T, readonly [K]> extends readonly [K]
			? T extends readonly [...infer R, K]
				? R['length']
				: 0
			: never;
	} & Readonly<Record<number, T[number]>>;
};
makeEnum(['hi', 'cool']);
// /**
//  * Map each string in the tuple T to its numeric index type
//  */
export type IndexMap<T extends readonly string[]> = {
	[K in keyof T as T[K] & string]: K extends `${number}` ? NumberFromString<K> : never;
};

// /**
//  * Creates a bi-directional enum mapping with exact numeric literals as values.
//  * @param array - readonly array of unique strings
//  * @returns enum-like object with keys to exact number and numbers back to strings
//  */
// export const makeEnum = <const T extends readonly string[]>(array: T) => {
// 	const entries = array.flatMap((name, index) => [
// 		[name, index],
// 		[index, name]
// 	]);
// 	return Object.fromEntries(entries) as Readonly<IndexMap<T>> & Readonly<Record<number, T[number]>>;
// };
