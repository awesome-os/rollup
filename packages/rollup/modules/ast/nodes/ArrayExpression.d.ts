import type { DeoptimizableEntity } from '../DeoptimizableEntity';
import type { HasEffectsContext, InclusionContext } from '../ExecutionContext';
import type { NodeInteraction, NodeInteractionCalled } from '../NodeInteractions';
import { type EntityPathTracker, type ObjectPath } from '../utils/PathTracker';
import type * as NodeType from './NodeType';
import type { ExpressionEntity, LiteralValueOrUnknown } from './shared/Expression';
import { NodeBase } from './shared/Node';
import { type ExpressionNode } from '@rollup/types';
import SpreadElement from './SpreadElement';
export default class ArrayExpression extends NodeBase {
    elements: readonly (ExpressionNode | SpreadElement | null)[];
    type: NodeType.tArrayExpression;
    private objectEntity;
    deoptimizeArgumentsOnInteractionAtPath(interaction: NodeInteraction, path: ObjectPath, recursionTracker: EntityPathTracker): void;
    deoptimizePath(path: ObjectPath): void;
    getLiteralValueAtPath(path: ObjectPath, recursionTracker: EntityPathTracker, origin: DeoptimizableEntity): LiteralValueOrUnknown;
    getReturnExpressionWhenCalledAtPath(path: ObjectPath, interaction: NodeInteractionCalled, recursionTracker: EntityPathTracker, origin: DeoptimizableEntity): [expression: ExpressionEntity, isPure: boolean];
    hasEffectsOnInteractionAtPath(path: ObjectPath, interaction: NodeInteraction, context: HasEffectsContext): boolean;
    includeNode(context: InclusionContext): void;
    applyDeoptimizations(): void;
    private getObjectEntity;
}
