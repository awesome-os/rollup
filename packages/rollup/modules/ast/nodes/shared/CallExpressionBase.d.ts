import type { DeoptimizableEntity } from '../../DeoptimizableEntity';
import type { HasEffectsContext } from '../../ExecutionContext';
import type { NodeInteraction, NodeInteractionCalled } from '../../NodeInteractions';
import { type EntityPathTracker, type ObjectPath } from '../../utils/PathTracker';
import { type ExpressionEntity, type LiteralValueOrUnknown } from './Expression';
import { NodeBase } from './Node';
export default abstract class CallExpressionBase extends NodeBase implements DeoptimizableEntity {
    protected interaction: NodeInteractionCalled;
    protected returnExpression: [expression: ExpressionEntity, isPure: boolean] | null;
    private deoptimizableDependentExpressions;
    private expressionsToBeDeoptimized;
    deoptimizeArgumentsOnInteractionAtPath(interaction: NodeInteraction, path: ObjectPath, recursionTracker: EntityPathTracker): void;
    deoptimizeCache(): void;
    deoptimizePath(path: ObjectPath): void;
    getLiteralValueAtPath(path: ObjectPath, recursionTracker: EntityPathTracker, origin: DeoptimizableEntity): LiteralValueOrUnknown;
    getReturnExpressionWhenCalledAtPath(path: ObjectPath, interaction: NodeInteractionCalled, recursionTracker: EntityPathTracker, origin: DeoptimizableEntity): [expression: ExpressionEntity, isPure: boolean];
    hasEffectsOnInteractionAtPath(path: ObjectPath, interaction: NodeInteraction, context: HasEffectsContext): boolean;
    protected abstract getReturnExpression(recursionTracker?: EntityPathTracker): [expression: ExpressionEntity, isPure: boolean];
}
