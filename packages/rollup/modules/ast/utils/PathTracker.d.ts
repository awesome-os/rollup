import type { Entity } from '../Entity';
import type { InclusionContext } from '../ExecutionContext';
import type { ExpressionEntity } from '../nodes/shared/Expression';
export declare const UnknownKey: unique symbol;
export declare const UnknownNonAccessorKey: unique symbol;
export declare const UnknownInteger: unique symbol;
export declare const SymbolToStringTag: unique symbol;
export type ObjectPathKey = string | typeof UnknownKey | typeof UnknownNonAccessorKey | typeof UnknownInteger | typeof SymbolToStringTag;
export type ObjectPath = readonly ObjectPathKey[];
export declare const EMPTY_PATH: ObjectPath;
export declare const UNKNOWN_PATH: ObjectPath;
export declare const UNKNOWN_NON_ACCESSOR_PATH: ObjectPath;
export declare const UNKNOWN_INTEGER_PATH: ObjectPath;
export declare class EntityPathTracker {
    private entityPaths;
    trackEntityAtPathAndGetIfTracked(path: ObjectPath, entity: Entity): boolean;
    withTrackedEntityAtPath<T>(path: ObjectPath, entity: Entity, onUntracked: () => T, returnIfTracked: T): T;
    private getEntities;
}
export declare const SHARED_RECURSION_TRACKER: EntityPathTracker;
export declare class DiscriminatedPathTracker {
    private entityPaths;
    trackEntityAtPathAndGetIfTracked(path: ObjectPath, discriminator: unknown, entity: unknown): boolean;
}
export interface IncludedPathTracker {
    includePathAndGetIfIncluded(path: ObjectPath): boolean;
}
export declare class IncludedFullPathTracker implements IncludedPathTracker {
    private includedPaths;
    includePathAndGetIfIncluded(path: ObjectPath): boolean;
}
export declare class IncludedTopLevelPathTracker implements IncludedPathTracker {
    private includedPaths;
    includePathAndGetIfIncluded(path: ObjectPath): boolean;
    includeAllPaths(entity: ExpressionEntity, context: InclusionContext, basePath: ObjectPath): void;
}
