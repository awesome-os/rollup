import type {
	NormalizedGeneratedCodeOptions,
	NormalizedJsxOptions,
	NormalizedTreeshakingOptions
} from 'rollup';

export type ObjectOptionWithPresets =
	| Partial<NormalizedTreeshakingOptions>
	| Partial<NormalizedGeneratedCodeOptions>
	| Partial<NormalizedJsxOptions>;
