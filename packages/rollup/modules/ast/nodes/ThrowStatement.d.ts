import type MagicString from 'magic-string';
import type { RenderOptions } from '@rollup/types';
import { type InclusionContext } from '@rollup/types';
import type * as NodeType from './NodeType';
import { StatementBase } from './shared/Node';
import { type ExpressionNode, type IncludeChildren } from '@rollup/types';
export default class ThrowStatement extends StatementBase {
    argument: ExpressionNode;
    type: NodeType.tThrowStatement;
    hasEffects(): boolean;
    include(context: InclusionContext, includeChildrenRecursively: IncludeChildren): void;
    includeNode(context: InclusionContext): void;
    render(code: MagicString, options: RenderOptions): void;
}
