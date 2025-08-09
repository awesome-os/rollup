import type MagicString from 'magic-string';
import type { RenderOptions } from '../../utils/renderHelpers';
import type { HasEffectsContext, InclusionContext } from '../ExecutionContext';
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
