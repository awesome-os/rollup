import type { DeoptimizableEntity } from '../../DeoptimizableEntity';
import type { HasEffectsContext, InclusionContext } from '../../ExecutionContext';
import type { NodeInteraction, NodeInteractionCalled } from '../../NodeInteractions';
import type { EntityPathTracker, ObjectPath } from '../../utils/PathTracker';
import type Variable from '../../variables/Variable';
import type { ExpressionEntity, LiteralValueOrUnknown } from './Expression';
import { type IncludeChildren, NodeBase } from './Node';
export default class IdentifierBase extends NodeBase {
    name: string;
    variable: Variable | null;
    protected isVariableReference: boolean;
    private get isTDZAccess();
    private set isTDZAccess(value);
    deoptimizeArgumentsOnInteractionAtPath(interaction: NodeInteraction, path: ObjectPath, recursionTracker: EntityPathTracker): void;
    deoptimizePath(path: ObjectPath): void;
    getLiteralValueAtPath(path: ObjectPath, recursionTracker: EntityPathTracker, origin: DeoptimizableEntity): LiteralValueOrUnknown;
    getReturnExpressionWhenCalledAtPath(path: ObjectPath, interaction: NodeInteractionCalled, recursionTracker: EntityPathTracker, origin: DeoptimizableEntity): [expression: ExpressionEntity, isPure: boolean];
    hasEffects(context: HasEffectsContext): boolean;
    hasEffectsOnInteractionAtPath(path: ObjectPath, interaction: NodeInteraction, context: HasEffectsContext): boolean;
    include(context: InclusionContext, includeChildrenRecursively: IncludeChildren): void;
    includeNode(context: InclusionContext): void;
    includePath(path: ObjectPath, context: InclusionContext): void;
    includeCallArguments(interaction: NodeInteractionCalled, context: InclusionContext): void;
    isPossibleTDZ(): boolean;
    applyDeoptimizations(): void;
    private disallowImportReassignment;
    private getVariableRespectingTDZ;
    private isPureFunction;
}
