import { xxhashBase16, xxhashBase36, xxhashBase64Url } from '../../native';
export const getHash64 = input => xxhashBase64Url(ensureBuffer(input));
export const getHash36 = input => xxhashBase36(ensureBuffer(input));
export const getHash16 = input => xxhashBase16(ensureBuffer(input));
export const hasherByType = {
    base36: getHash36,
    base64: getHash64,
    hex: getHash16
};
export function ensureBuffer(input) {
    if (typeof input === 'string') {
        return new TextEncoder().encode(input);
    }
    return input;
}
