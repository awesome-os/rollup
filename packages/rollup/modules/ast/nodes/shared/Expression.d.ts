import type { DeoptimizableEntity } from '../../DeoptimizableEntity';
import type { WritableEntity } from '../../Entity';
import type { HasEffectsContext, InclusionContext } from '../../ExecutionContext';
import type { NodeInteraction, NodeInteractionCalled } from '../../NodeInteractions';
import type { EntityPathTracker, ObjectPath, SymbolToStringTag } from '../../utils/PathTracker';
import type { LiteralValue } from '../Literal';
import type { IncludeChildren } from '@rollup/types';
export declare const UnknownValue: unique symbol;
export declare const UnknownTruthyValue: unique symbol;
export declare const UnknownFalsyValue: unique symbol;
export type LiteralValueOrUnknown = LiteralValue | typeof UnknownValue | typeof UnknownTruthyValue | typeof UnknownFalsyValue | typeof SymbolToStringTag;
export interface InclusionOptions {
    /**
     * Include the id of a declarator even if unused to ensure it is a valid
     * statement.
     */
    asSingleStatement?: boolean;
}
export declare class ExpressionEntity implements WritableEntity {
    protected flags: number;
    get included(): boolean;
    set included(value: boolean);
    deoptimizeArgumentsOnInteractionAtPath(interaction: NodeInteraction, _path: ObjectPath, _recursionTracker: EntityPathTracker): void;
    deoptimizePath(_path: ObjectPath): void;
    /**
     * If possible it returns a stringifyable literal value for this node that
     * can be used for inlining or comparing values. Otherwise, it should return
     * UnknownValue.
     */
    getLiteralValueAtPath(_path: ObjectPath, _recursionTracker: EntityPathTracker, _origin: DeoptimizableEntity): LiteralValueOrUnknown;
    getReturnExpressionWhenCalledAtPath(_path: ObjectPath, _interaction: NodeInteractionCalled, _recursionTracker: EntityPathTracker, _origin: DeoptimizableEntity): [expression: ExpressionEntity, isPure: boolean];
    hasEffectsOnInteractionAtPath(_path: ObjectPath, _interaction: NodeInteraction, _context: HasEffectsContext): boolean;
    include(context: InclusionContext, _includeChildrenRecursively: IncludeChildren, _options?: InclusionOptions): void;
    includeNode(_context: InclusionContext): void;
    includePath(_path: ObjectPath, context: InclusionContext): void;
    includeCallArguments(interaction: NodeInteractionCalled, context: InclusionContext): void;
    shouldBeIncluded(_context: InclusionContext): boolean;
}
export declare const UNKNOWN_EXPRESSION: ExpressionEntity;
export declare const UNKNOWN_RETURN_EXPRESSION: [expression: ExpressionEntity, isPure: boolean];
export declare const deoptimizeInteraction: (interaction: NodeInteraction) => void;
export declare const includeInteraction: (interaction: NodeInteraction, context: InclusionContext) => void;
export declare const includeInteractionWithoutThis: ({ args }: NodeInteraction, context: InclusionContext) => void;
