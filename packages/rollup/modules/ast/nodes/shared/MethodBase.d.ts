import type { DeoptimizableEntity } from '@rollup/types';
import type { HasEffectsContext } from '@rollup/types';
import type { NodeInteraction, NodeInteractionCalled } from '../../NodeInteractions';
import { type EntityPathTracker, type ObjectPath } from '../../utils/PathTracker';
import type PrivateIdentifier from '../PrivateIdentifier';
import { type ExpressionEntity } from './Expression';
import { type LiteralValueOrUnknown } from '@rollup/types';
import { NodeBase } from './Node';
import { type ExpressionNode } from '@rollup/types';
import type { DeclarationPatternNode } from './Pattern';
export default class MethodBase extends NodeBase implements DeoptimizableEntity {
    key: ExpressionNode | PrivateIdentifier;
    kind: 'constructor' | 'method' | 'init' | 'get' | 'set';
    value: ExpressionNode | (ExpressionNode & DeclarationPatternNode);
    get computed(): boolean;
    set computed(value: boolean);
    private accessedValue;
    deoptimizeArgumentsOnInteractionAtPath(interaction: NodeInteraction, path: ObjectPath, recursionTracker: EntityPathTracker): void;
    deoptimizeCache(): void;
    deoptimizePath(path: ObjectPath): void;
    getLiteralValueAtPath(path: ObjectPath, recursionTracker: EntityPathTracker, origin: DeoptimizableEntity): LiteralValueOrUnknown;
    getReturnExpressionWhenCalledAtPath(path: ObjectPath, interaction: NodeInteractionCalled, recursionTracker: EntityPathTracker, origin: DeoptimizableEntity): [expression: ExpressionEntity, isPure: boolean];
    hasEffects(context: HasEffectsContext): boolean;
    hasEffectsOnInteractionAtPath(path: ObjectPath, interaction: NodeInteraction, context: HasEffectsContext): boolean;
    protected getAccessedValue(): [expression: ExpressionEntity, isPure: boolean];
}
