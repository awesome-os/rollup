export { parse, xxhashBase16, xxhashBase36, xxhashBase64Url } from '../../../../wasm/bindings_wasm.js';
export declare function parseAsync(code: string, allowReturnOutsideFunction: boolean, jsx: boolean, _signal?: AbortSignal | undefined | null): Promise<Uint8Array<ArrayBufferLike>>;
