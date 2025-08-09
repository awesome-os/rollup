import type { DeoptimizableEntity } from '@rollup/types';
import { type HasEffectsContext, type InclusionContext } from '@rollup/types';
import type { NodeInteraction, NodeInteractionCalled } from '../../NodeInteractions';
import type ReturnValueScope from '../../scopes/ReturnValueScope';
import type { EntityPathTracker, ObjectPath } from '../../utils/PathTracker';
import BlockStatement from '../BlockStatement';
import type { ExpressionEntity } from './Expression';
import type { LiteralValueOrUnknown } from '@rollup/types';
import { NodeBase } from './Node';
import { type ExpressionNode, type GenericEsTreeNode, type IncludeChildren } from '@rollup/types';
import type { ObjectEntity } from './ObjectEntity';
import type { DeclarationPatternNode } from './Pattern';
export default abstract class FunctionBase extends NodeBase {
    body: BlockStatement | ExpressionNode;
    params: DeclarationPatternNode[];
    preventChildBlockScope: true;
    scope: ReturnValueScope;
    /** Marked with #__NO_SIDE_EFFECTS__ annotation */
    annotationNoSideEffects?: boolean;
    get async(): boolean;
    set async(value: boolean);
    get deoptimizedReturn(): boolean;
    set deoptimizedReturn(value: boolean);
    get generator(): boolean;
    set generator(value: boolean);
    protected get hasCachedEffects(): boolean;
    protected set hasCachedEffects(value: boolean);
    deoptimizeArgumentsOnInteractionAtPath(interaction: NodeInteraction, path: ObjectPath, recursionTracker: EntityPathTracker): void;
    deoptimizePath(path: ObjectPath): void;
    getLiteralValueAtPath(path: ObjectPath, recursionTracker: EntityPathTracker, origin: DeoptimizableEntity): LiteralValueOrUnknown;
    getReturnExpressionWhenCalledAtPath(path: ObjectPath, interaction: NodeInteractionCalled, recursionTracker: EntityPathTracker, origin: DeoptimizableEntity): [expression: ExpressionEntity, isPure: boolean];
    hasEffectsOnInteractionAtPath(path: ObjectPath, interaction: NodeInteraction, context: HasEffectsContext): boolean;
    /**
     * If the function (expression or declaration) is only used as function calls
     */
    protected onlyFunctionCallUsed(): boolean;
    private parameterVariableValuesDeoptimized;
    include(context: InclusionContext, includeChildrenRecursively: IncludeChildren): void;
    includeCallArguments: ({ args }: NodeInteractionCalled, context: InclusionContext) => void;
    initialise(): void;
    parseNode(esTreeNode: GenericEsTreeNode): this;
    protected abstract getObjectEntity(): ObjectEntity;
}
