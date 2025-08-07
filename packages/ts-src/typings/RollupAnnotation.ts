export type AnnotationType = 'pure' | 'noSideEffects';

export type RollupAnnotation = {
	start: number;
	end: number;
	type: AnnotationType;
};
