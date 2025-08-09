import type { RollupAnnotation } from "../rollup/types";
export declare const ANNOTATION_KEY = "_rollupAnnotations";
export declare const INVALID_ANNOTATION_KEY = "_rollupRemoved";
export declare const convertAnnotations: (position: number, buffer: Uint32Array) => readonly RollupAnnotation[];
