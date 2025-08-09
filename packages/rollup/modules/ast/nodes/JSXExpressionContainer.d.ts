import type MagicString from 'magic-string';
import type { RenderOptions } from '../../utils/renderHelpers';
import type { InclusionContext } from '../ExecutionContext';
import type JSXEmptyExpression from './JSXEmptyExpression';
import type * as NodeType from './NodeType';
import type { ExpressionNode } from '@rollup/types';
import { NodeBase } from './shared/Node';
export default class JSXExpressionContainer extends NodeBase {
    type: NodeType.tJSXExpressionContainer;
    expression: ExpressionNode | JSXEmptyExpression;
    includeNode(context: InclusionContext): void;
    render(code: MagicString, options: RenderOptions): void;
}
