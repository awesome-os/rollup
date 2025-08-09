import type MagicString from 'magic-string';
import { type RenderOptions } from '../../utils/renderHelpers';
import type { HasEffectsContext, InclusionContext } from '../ExecutionContext';
import type { EntityPathTracker } from '../utils/PathTracker';
import * as NodeType from './NodeType';
import CallExpressionBase from './shared/CallExpressionBase';
import type { ExpressionEntity } from './shared/Expression';
import type { ExpressionNode, IncludeChildren } from './shared/Node';
import type TemplateLiteral from './TemplateLiteral';
export default class TaggedTemplateExpression extends CallExpressionBase {
    quasi: TemplateLiteral;
    tag: ExpressionNode;
    type: NodeType.tTaggedTemplateExpression;
    private args;
    private get hasCheckedForWarnings();
    private set hasCheckedForWarnings(value);
    bind(): void;
    hasEffects(context: HasEffectsContext): boolean;
    include(context: InclusionContext, includeChildrenRecursively: IncludeChildren): void;
    initialise(): void;
    render(code: MagicString, options: RenderOptions): void;
    applyDeoptimizations(): void;
    protected getReturnExpression(recursionTracker?: EntityPathTracker): [expression: ExpressionEntity, isPure: boolean];
}
