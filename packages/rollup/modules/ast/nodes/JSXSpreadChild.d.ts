import type MagicString from 'magic-string';
import type { RenderOptions } from '../../utils/renderHelpers';
import type * as NodeType from './NodeType';
import type { ExpressionNode } from '@rollup/types';
import { NodeBase } from './shared/Node';
export default class JSXSpreadChild extends NodeBase {
    type: NodeType.tJSXSpreadChild;
    expression: ExpressionNode;
    render(code: MagicString, options: RenderOptions): void;
}
