import { decode, encode } from '@jridgewell/sourcemap-codec';
import type {
	DecodedSourceMapOrMissing,
	ExistingDecodedSourceMap,
	ExistingRawSourceMap} from '../rollup/types';
import type { CachedSourcemapData, Input } from '../../typings/CachedSourcemapData';

const sourceMapCache = new WeakMap<ExistingDecodedSourceMap, CachedSourcemapData>();

/**
 * This clears the decoded array and falls back to the encoded string form.
 * Sourcemap mappings arrays can be very large and holding on to them for longer
 * than is necessary leads to poor heap utilization.
 */
function resetCacheToEncoded(cache: CachedSourcemapData) {
	if (cache.encodedMappings === undefined && cache.decodedMappings) {
		cache.encodedMappings = encode(cache.decodedMappings);
	}
	cache.decodedMappings = undefined;
}

export function resetSourcemapCache(
	map: ExistingDecodedSourceMap | null,
	sourcemapChain?: DecodedSourceMapOrMissing[]
) {
	if (map) {
		const cache = sourceMapCache.get(map);
		if (cache) {
			resetCacheToEncoded(cache);
		}
	}

	if (!sourcemapChain) {
		return;
	}

	for (const map of sourcemapChain) {
		if (map.missing) continue;

		resetSourcemapCache(map);
	}
}

// export function decodedSourcemap(map: null | undefined): null;
// export function decodedSourcemap(map: Exclude<Input, null | undefined>): ExistingDecodedSourceMap;
// export function decodedSourcemap(map: Input): ExistingDecodedSourceMap | null;

export const asExistingSourceMap = (map: ExistingRawSourceMap | {
    mappings: "";
} | ExistingDecodedSourceMap) => { 
	if (Array.isArray(map.mappings)) {
		return map as ExistingDecodedSourceMap;
	}
	return map as ExistingRawSourceMap | {
		mappings: "";
	}

};
export function decodedSourcemap(map: Input) {
	if (!map) return null;

	if (typeof map === 'string') {
		map = asExistingSourceMap(JSON.parse(map));
	}
	if (!map.mappings) {
		// is type UnexpectedInput plugin returned null 
		return asExistingSourceMap({
			mappings: [],
			names: [],
			sources: [],
			version: 3
		});
	}

	const originalMappings = map.mappings;
	const isAlreadyDecoded = Array.isArray(originalMappings);
	const cache: CachedSourcemapData = {
		decodedMappings: isAlreadyDecoded ? originalMappings : undefined,
		encodedMappings: isAlreadyDecoded ? "" : originalMappings
	};

	const decodedMap = {
		...map,
		// By moving mappings behind an accessor, we can avoid unneeded computation for cases
		// where the mappings field is never actually accessed. This appears to greatly reduce
		// the overhead of sourcemap decoding in terms of both compute time and memory usage.
		get mappings() {
			if (cache.decodedMappings) {
				return cache.decodedMappings;
			}
			// If decodedMappings doesn't exist then encodedMappings should.
			// The only scenario where cache.encodedMappings should be undefined is if the map
			// this was constructed from was already decoded, or if mappings was set to a new
			// decoded string. In either case, this line shouldn't get hit.
			cache.decodedMappings = cache.encodedMappings ? decode(cache.encodedMappings) : [];
			cache.encodedMappings = undefined;
			return cache.decodedMappings;
		}
	} as ExistingDecodedSourceMap;

	sourceMapCache.set(decodedMap, cache);

	return decodedMap;
}
