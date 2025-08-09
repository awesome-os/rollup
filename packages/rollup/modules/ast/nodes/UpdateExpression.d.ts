import type MagicString from 'magic-string';
import type { RenderOptions } from '../../utils/renderHelpers';
import type { HasEffectsContext, InclusionContext } from '../ExecutionContext';
import type { NodeInteraction } from '../NodeInteractions';
import { type ObjectPath } from '../utils/PathTracker';
import * as NodeType from './NodeType';
import type { ExpressionNode, IncludeChildren } from './shared/Node';
import { NodeBase } from './shared/Node';
export default class UpdateExpression extends NodeBase {
    argument: ExpressionNode;
    operator: '++' | '--';
    prefix: boolean;
    type: NodeType.tUpdateExpression;
    private interaction;
    hasEffects(context: HasEffectsContext): boolean;
    hasEffectsOnInteractionAtPath(path: ObjectPath, { type }: NodeInteraction): boolean;
    include(context: InclusionContext, includeChildrenRecursively: IncludeChildren): void;
    initialise(): void;
    render(code: MagicString, options: RenderOptions): void;
    applyDeoptimizations(): void;
}
