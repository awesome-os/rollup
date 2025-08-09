import type MagicString from 'magic-string';
import type { NodeRenderOptions, RenderOptions } from '../../utils/renderHelpers';
import * as NodeType from './NodeType';
import ClassNode from './shared/ClassNode';
export default class ClassExpression extends ClassNode {
    type: NodeType.tClassExpression;
    render(code: MagicString, options: RenderOptions, { renderedSurroundingElement }?: NodeRenderOptions): void;
}
