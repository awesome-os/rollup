import type MagicString from 'magic-string';
import type { RenderOptions } from '../../utils/renderHelpers';
import type { HasEffectsContext, InclusionContext } from '../ExecutionContext';
import type { NodeInteraction } from '../NodeInteractions';
import { type ObjectPath } from '../utils/PathTracker';
import type * as NodeType from './NodeType';
import type { ExpressionNode, IncludeChildren } from './shared/Node';
import { NodeBase } from './shared/Node';
export default class NewExpression extends NodeBase {
    arguments: ExpressionNode[];
    callee: ExpressionNode;
    type: NodeType.tNewExpression;
    private interaction;
    /** Marked with #__PURE__ annotation */
    annotationPure?: boolean;
    hasEffects(context: HasEffectsContext): boolean;
    hasEffectsOnInteractionAtPath(path: ObjectPath, { type }: NodeInteraction): boolean;
    include(context: InclusionContext, includeChildrenRecursively: IncludeChildren): void;
    includeNode(context: InclusionContext): void;
    initialise(): void;
    render(code: MagicString, options: RenderOptions): void;
    applyDeoptimizations(): void;
}
