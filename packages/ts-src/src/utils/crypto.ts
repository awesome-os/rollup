import { xxhashBase16, xxhashBase36, xxhashBase64Url } from '../../native';
import type { HashCharacters } from 'rollup';
import type { GetHash } from '../../typings/GetHash';

export const getHash64: GetHash = input => xxhashBase64Url(ensureBuffer(input));
export const getHash36: GetHash = input => xxhashBase36(ensureBuffer(input));
export const getHash16: GetHash = input => xxhashBase16(ensureBuffer(input));

export const hasherByType: Record<HashCharacters, GetHash> = {
	base36: getHash36,
	base64: getHash64,
	hex: getHash16
};

export function ensureBuffer(input: string | Uint8Array): Uint8Array {
	if (typeof input === 'string') {
		return new TextEncoder().encode(input);
	}
	return input;
}
