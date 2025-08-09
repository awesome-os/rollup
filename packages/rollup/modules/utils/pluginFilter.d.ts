import type { StringFilter } from 'rollup';
export type PluginFilter = (input: string) => boolean;
export type TransformHookFilter = (id: string, code: string) => boolean;
export declare function createFilterForId(filter: StringFilter | undefined): PluginFilter | undefined;
export declare function createFilterForTransform(idFilter: StringFilter | undefined, codeFilter: StringFilter | undefined): TransformHookFilter | undefined;
