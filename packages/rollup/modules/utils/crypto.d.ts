import type { HashCharacters } from '@rollup/types';
import type { GetHash } from "@rollup/types";
export declare const getHash64: GetHash;
export declare const getHash36: GetHash;
export declare const getHash16: GetHash;
export declare const hasherByType: Record<HashCharacters, GetHash>;
export declare function ensureBuffer(input: string | Uint8Array): Uint8Array;
