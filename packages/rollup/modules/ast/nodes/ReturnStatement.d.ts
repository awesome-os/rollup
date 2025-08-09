import type { ExpressionNode, HasEffectsContext, IncludeChildren, InclusionContext, RenderOptions } from '@rollup/types';
import type MagicString from 'magic-string';
import type * as NodeType from './NodeType';
import { StatementBase } from './shared/Node';
export default class ReturnStatement extends StatementBase {
    argument: ExpressionNode | null;
    type: NodeType.tReturnStatement;
    hasEffects(context: HasEffectsContext): boolean;
    include(context: InclusionContext, includeChildrenRecursively: IncludeChildren): void;
    includeNode(context: InclusionContext): void;
    initialise(): void;
    render(code: MagicString, options: RenderOptions): void;
}
