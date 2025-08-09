import type { DeoptimizableEntity } from '@rollup/types';
import type { HasEffectsContext, InclusionContext } from '@rollup/types';
import type { NodeInteraction, NodeInteractionCalled } from '../NodeInteractions';
import type { EntityPathTracker, ObjectPath } from '../utils/PathTracker';
import type Decorator from './Decorator';
import type * as NodeType from './NodeType';
import type PrivateIdentifier from './PrivateIdentifier';
import { type ExpressionEntity } from './shared/Expression';
import { type LiteralValueOrUnknown } from '@rollup/types';
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
