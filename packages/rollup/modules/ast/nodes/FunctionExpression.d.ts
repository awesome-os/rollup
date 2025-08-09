import type MagicString from 'magic-string';
import type { NodeRenderOptions, RenderOptions } from '../../utils/renderHelpers';
import ChildScope from '../scopes/ChildScope';
import * as NodeType from './NodeType';
import FunctionNode from './shared/FunctionNode';
import type { GenericEsTreeNode } from './shared/Node';
export default class FunctionExpression extends FunctionNode {
    type: NodeType.tFunctionExpression;
    idScope: ChildScope;
    createScope(parentScope: ChildScope): void;
    parseNode(esTreeNode: GenericEsTreeNode): this;
    protected onlyFunctionCallUsed(): boolean;
    render(code: MagicString, options: RenderOptions, { renderedSurroundingElement }?: NodeRenderOptions): void;
}
