// eslint-disable-next-line prettier/prettier
export const SortingFileTypeArray = /** @type {const} */ ([
    'ENTRY_CHUNK',
    'SECONDARY_CHUNK',
    'ASSET'
    // eslint-disable-next-line prettier/prettier
]);
// TODO: Replace all enums in code with the best variant for the coder.
export const makeMap = (array) => Object.fromEntries(array.map((name, index) => [name, index]));
export const makeEnum2 = (array) => {
    const entries = array.flatMap((name, index) => [
        [name, index],
        [index, name]
    ]);
    return Object.fromEntries(entries);
};
export const makeEnum3 = (array) => {
    const entries = array.flatMap((name, index) => [
        [name, index],
        [index.toString(), name]
    ]);
    return Object.fromEntries(entries);
};
/** short and precise
 * Creates a bi-directional enum mapping with exact numeric literals as values.
 *
 * @param array - readonly array of unique string keys
 * @returns enum-like object mapping keys to exact numeric literals and numeric keys back to strings
 */
export const makeEnum = (array) => {
    const entries = array.flatMap((name, index) => [
        [name, index],
        [index, name]
    ]);
    return Object.fromEntries(entries);
};
makeEnum(['hi', 'cool']);
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
