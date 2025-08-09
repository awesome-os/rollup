import type { Input } from 'rollup';
import type { DecodedSourceMapOrMissing, ExistingDecodedSourceMap } from 'rollup';
export declare function resetSourcemapCache(map: ExistingDecodedSourceMap | null, sourcemapChain?: DecodedSourceMapOrMissing[]): void;
export declare function decodedSourcemap(map: Input): ExistingDecodedSourceMap | null;
