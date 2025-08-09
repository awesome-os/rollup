import type { DeoptimizableEntity, ExpressionNode, HasEffectsContext, IncludeChildren, InclusionContext, LiteralValueOrUnknown, NodeRenderOptions, RenderOptions } from '@rollup/types';
import type MagicString from 'magic-string';
import type { NodeInteraction } from '../NodeInteractions';
import type { EntityPathTracker, ObjectPath } from '../utils/PathTracker';
import type * as NodeType from './NodeType';
import { NodeBase } from './shared/Node';
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
