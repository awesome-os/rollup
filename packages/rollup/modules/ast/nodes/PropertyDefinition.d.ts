import type { DeoptimizableEntity } from '../DeoptimizableEntity';
import type { HasEffectsContext, InclusionContext } from '../ExecutionContext';
import type { NodeInteraction, NodeInteractionCalled } from '../NodeInteractions';
import type { EntityPathTracker, ObjectPath } from '../utils/PathTracker';
import type Decorator from './Decorator';
import type * as NodeType from './NodeType';
import type PrivateIdentifier from './PrivateIdentifier';
import { type ExpressionEntity, type LiteralValueOrUnknown } from './shared/Expression';
import { NodeBase } from './shared/Node';
import { type ExpressionNode } from '@rollup/types';
export default class PropertyDefinition extends NodeBase {
    key: ExpressionNode | PrivateIdentifier;
    static: boolean;
    type: NodeType.tPropertyDefinition;
    value: ExpressionNode | null;
    decorators: Decorator[];
    get computed(): boolean;
    set computed(value: boolean);
    deoptimizeArgumentsOnInteractionAtPath(interaction: NodeInteraction, path: ObjectPath, recursionTracker: EntityPathTracker): void;
    deoptimizePath(path: ObjectPath): void;
    getLiteralValueAtPath(path: ObjectPath, recursionTracker: EntityPathTracker, origin: DeoptimizableEntity): LiteralValueOrUnknown;
    getReturnExpressionWhenCalledAtPath(path: ObjectPath, interaction: NodeInteractionCalled, recursionTracker: EntityPathTracker, origin: DeoptimizableEntity): [expression: ExpressionEntity, isPure: boolean];
    hasEffects(context: HasEffectsContext): boolean;
    hasEffectsOnInteractionAtPath(path: ObjectPath, interaction: NodeInteraction, context: HasEffectsContext): boolean;
    includeNode(context: InclusionContext): void;
}
