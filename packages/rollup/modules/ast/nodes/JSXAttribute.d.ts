import type MagicString from 'magic-string';
import type { NodeRenderOptions, RenderOptions } from '../../utils/renderHelpers';
import type JSXElement from './JSXElement';
import type JSXExpressionContainer from './JSXExpressionContainer';
import type JSXFragment from './JSXFragment';
import JSXIdentifier from './JSXIdentifier';
import type JSXNamespacedName from './JSXNamespacedName';
import type Literal from './Literal';
import type * as NodeType from './NodeType';
import { NodeBase } from './shared/Node';
export default class JSXAttribute extends NodeBase {
    type: NodeType.tJSXAttribute;
    name: JSXIdentifier | JSXNamespacedName;
    value: Literal | JSXExpressionContainer | JSXElement | JSXFragment | null;
    render(code: MagicString, options: RenderOptions, { jsxMode }?: NodeRenderOptions): void;
}
