import type { HasEffectsContext } from '@rollup/types';
import type { DeoptimizableEntity } from '@rollup/types';
import type { NodeInteraction, NodeInteractionCalled } from '../../NodeInteractions';
import type { EntityPathTracker, ObjectPath } from '../../utils/PathTracker';
import { ExpressionEntity } from './Expression';
export declare class MultiExpression extends ExpressionEntity {
    private expressions;
    constructor(expressions: readonly ExpressionEntity[]);
    deoptimizePath(path: ObjectPath): void;
    getReturnExpressionWhenCalledAtPath(path: ObjectPath, interaction: NodeInteractionCalled, recursionTracker: EntityPathTracker, origin: DeoptimizableEntity): [expression: ExpressionEntity, isPure: boolean];
    hasEffectsOnInteractionAtPath(path: ObjectPath, interaction: NodeInteraction, context: HasEffectsContext): boolean;
}
