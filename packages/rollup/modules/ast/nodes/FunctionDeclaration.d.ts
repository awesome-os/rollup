import type * as NodeType from './NodeType';
import FunctionNode from './shared/FunctionNode';
import type { GenericEsTreeNode } from '@rollup/types';
export default class FunctionDeclaration extends FunctionNode {
    type: NodeType.tFunctionDeclaration;
    initialise(): void;
    protected onlyFunctionCallUsed(): boolean;
    parseNode(esTreeNode: GenericEsTreeNode): this;
}
