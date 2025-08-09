import type MagicString from 'magic-string';
import { type NodeRenderOptions, type RenderOptions } from '../../utils/renderHelpers';
import type { DeoptimizableEntity } from '../DeoptimizableEntity';
import type { HasEffectsContext, InclusionContext } from '../ExecutionContext';
import type { NodeInteraction } from '../NodeInteractions';
import { type EntityPathTracker, type ObjectPath } from '../utils/PathTracker';
import type * as NodeType from './NodeType';
import type { LiteralValueOrUnknown } from './shared/Expression';
import { type ExpressionNode, type IncludeChildren, NodeBase } from './shared/Node';
export default class SequenceExpression extends NodeBase {
    expressions: ExpressionNode[];
    type: NodeType.tSequenceExpression;
    deoptimizeArgumentsOnInteractionAtPath(interaction: NodeInteraction, path: ObjectPath, recursionTracker: EntityPathTracker): void;
    deoptimizePath(path: ObjectPath): void;
    getLiteralValueAtPath(path: ObjectPath, recursionTracker: EntityPathTracker, origin: DeoptimizableEntity): LiteralValueOrUnknown;
    hasEffects(context: HasEffectsContext): boolean;
    hasEffectsOnInteractionAtPath(path: ObjectPath, interaction: NodeInteraction, context: HasEffectsContext): boolean;
    include(context: InclusionContext, includeChildrenRecursively: IncludeChildren): void;
    includePath(path: ObjectPath, context: InclusionContext): void;
    removeAnnotations(code: MagicString): void;
    render(code: MagicString, options: RenderOptions, { renderedParentType, isCalleeOfRenderedParent, preventASI }?: NodeRenderOptions): void;
}
