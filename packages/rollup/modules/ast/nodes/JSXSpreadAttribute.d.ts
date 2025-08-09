import type MagicString from 'magic-string';
import type { RenderOptions } from '../../utils/renderHelpers';
import type * as NodeType from './NodeType';
import type { ExpressionNode } from './shared/Node';
import { NodeBase } from './shared/Node';
export default class JSXSpreadAttribute extends NodeBase {
    type: NodeType.tJSXSpreadAttribute;
    argument: ExpressionNode;
    render(code: MagicString, options: RenderOptions): void;
}
