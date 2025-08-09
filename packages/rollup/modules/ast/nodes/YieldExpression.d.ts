import type MagicString from 'magic-string';
import type { RenderOptions } from '@rollup/types';
import type { HasEffectsContext, InclusionContext } from '@rollup/types';
import type * as NodeType from './NodeType';
import { NodeBase } from './shared/Node';
import { type ExpressionNode } from '@rollup/types';
export default class YieldExpression extends NodeBase {
    argument: ExpressionNode | null;
    delegate: boolean;
    type: NodeType.tYieldExpression;
    applyDeoptimizations(): void;
    hasEffects(context: HasEffectsContext): boolean;
    includeNode(context: InclusionContext): void;
    render(code: MagicString, options: RenderOptions): void;
}
