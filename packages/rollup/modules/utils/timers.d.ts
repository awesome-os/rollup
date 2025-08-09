import type { NormalizedInputOptions, SerializedTimings } from '@rollup/types';
type LabelLevel = 1 | 2 | 3 | 4;
export declare function getTimings(): SerializedTimings;
export declare let timeStart: (label: string, level?: LabelLevel) => void;
export declare let timeEnd: (label: string, level?: LabelLevel) => void;
export declare function initialiseTimers(inputOptions: NormalizedInputOptions): void;
export {};
