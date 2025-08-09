import type MagicString from 'magic-string';
import { type NodeRenderOptions, type RenderOptions } from '../../utils/renderHelpers';
import { type HasEffectsContext, type InclusionContext } from '../ExecutionContext';
import type { NodeInteraction } from '../NodeInteractions';
import { type ObjectPath } from '../utils/PathTracker';
import * as NodeType from './NodeType';
import { type ExpressionNode, type IncludeChildren, NodeBase } from './shared/Node';
import type { PatternNode } from './shared/Pattern';
export default class AssignmentExpression extends NodeBase {
    left: PatternNode;
    operator: '=' | '+=' | '-=' | '*=' | '/=' | '%=' | '<<=' | '>>=' | '>>>=' | '|=' | '^=' | '&=' | '**=' | '&&=' | '||=' | '??=';
    right: ExpressionNode;
    type: NodeType.tAssignmentExpression;
    private isConstReassignment;
    hasEffects(context: HasEffectsContext): boolean;
    hasEffectsOnInteractionAtPath(path: ObjectPath, interaction: NodeInteraction, context: HasEffectsContext): boolean;
    include(context: InclusionContext, includeChildrenRecursively: IncludeChildren): void;
    includeNode(context: InclusionContext): void;
    initialise(): void;
    render(code: MagicString, options: RenderOptions, { preventASI, renderedParentType, renderedSurroundingElement }?: NodeRenderOptions): void;
    applyDeoptimizations(): void;
}
