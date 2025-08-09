import type { Input } from '@rollup/types';
import type { DecodedSourceMapOrMissing, ExistingDecodedSourceMap } from '@rollup/types';
export declare function resetSourcemapCache(map: ExistingDecodedSourceMap | null, sourcemapChain?: DecodedSourceMapOrMissing[]): void;
export declare function decodedSourcemap(map: Input): ExistingDecodedSourceMap | null;
