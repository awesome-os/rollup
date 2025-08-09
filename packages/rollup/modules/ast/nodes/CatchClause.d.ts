import type ChildScope from '../scopes/ChildScope';
import ParameterScope from '../scopes/ParameterScope';
import BlockStatement from './BlockStatement';
import type * as NodeType from './NodeType';
import { type GenericEsTreeNode, NodeBase } from './shared/Node';
import type { DeclarationPatternNode } from './shared/Pattern';
export default class CatchClause extends NodeBase {
    body: BlockStatement;
    param: DeclarationPatternNode | null;
    preventChildBlockScope: true;
    scope: ParameterScope;
    type: NodeType.tCatchClause;
    createScope(parentScope: ChildScope): void;
    parseNode(esTreeNode: GenericEsTreeNode): this;
}
