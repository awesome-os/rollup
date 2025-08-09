import type MagicString from 'magic-string';
import { type NodeRenderOptions, type RenderOptions } from '../../utils/renderHelpers';
import type { DeoptimizableEntity } from '../DeoptimizableEntity';
import type { HasEffectsContext, InclusionContext } from '../ExecutionContext';
import type { EntityPathTracker, ObjectPath } from '../utils/PathTracker';
import type * as NodeType from './NodeType';
import CallExpressionBase from './shared/CallExpressionBase';
import type { ExpressionEntity, LiteralValueOrUnknown } from './shared/Expression';
import type { ChainElement, ExpressionNode, IncludeChildren, SkippedChain } from './shared/Node';
import type SpreadElement from './SpreadElement';
import type Super from './Super';
export default class CallExpression extends CallExpressionBase implements DeoptimizableEntity, ChainElement {
    arguments: (ExpressionNode | SpreadElement)[];
    callee: ExpressionNode | Super;
    type: NodeType.tCallExpression;
    /** Marked with #__PURE__ annotation */
    annotationPure?: boolean;
    private get hasCheckedForWarnings();
    private set hasCheckedForWarnings(value);
    get optional(): boolean;
    set optional(value: boolean);
    bind(): void;
    getLiteralValueAtPathAsChainElement(path: ObjectPath, recursionTracker: EntityPathTracker, origin: DeoptimizableEntity): LiteralValueOrUnknown | SkippedChain;
    hasEffects(context: HasEffectsContext): boolean;
    hasEffectsAsChainElement(context: HasEffectsContext): boolean | SkippedChain;
    include(context: InclusionContext, includeChildrenRecursively: IncludeChildren): void;
    includeNode(context: InclusionContext): void;
    initialise(): void;
    render(code: MagicString, options: RenderOptions, { renderedSurroundingElement }?: NodeRenderOptions): void;
    applyDeoptimizations(): void;
    protected getReturnExpression(recursionTracker?: EntityPathTracker): [expression: ExpressionEntity, isPure: boolean];
}
