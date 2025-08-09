import type { HasEffectsContext } from '@rollup/types';
import type { DeoptimizableEntity } from '@rollup/types';
import type { NodeInteraction, NodeInteractionCalled } from '../../NodeInteractions';
import type { EntityPathTracker, ObjectPath } from '../../utils/PathTracker';
import { ExpressionEntity } from './Expression';
import { type LiteralValueOrUnknown } from '@rollup/types';
export declare class ObjectMember extends ExpressionEntity {
    private readonly object;
    private readonly path;
    constructor(object: ExpressionEntity, path: ObjectPath);
    deoptimizeArgumentsOnInteractionAtPath(interaction: NodeInteraction, path: ObjectPath, recursionTracker: EntityPathTracker): void;
    deoptimizePath(path: ObjectPath): void;
    getLiteralValueAtPath(path: ObjectPath, recursionTracker: EntityPathTracker, origin: DeoptimizableEntity): LiteralValueOrUnknown;
    getReturnExpressionWhenCalledAtPath(path: ObjectPath, interaction: NodeInteractionCalled, recursionTracker: EntityPathTracker, origin: DeoptimizableEntity): [expression: ExpressionEntity, isPure: boolean];
    hasEffectsOnInteractionAtPath(path: ObjectPath, interaction: NodeInteraction, context: HasEffectsContext): boolean;
}
