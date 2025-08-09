import type { InclusionContext } from '@rollup/types';
import type ChildScope from '../scopes/ChildScope';
import ClassBodyScope from '../scopes/ClassBodyScope';
import type MethodDefinition from './MethodDefinition';
import type * as NodeType from './NodeType';
import type PropertyDefinition from './PropertyDefinition';
import { NodeBase } from './shared/Node';
import { type GenericEsTreeNode, type IncludeChildren } from '@rollup/types';
import type StaticBlock from './StaticBlock';
export default class ClassBody extends NodeBase {
    body: (MethodDefinition | PropertyDefinition | StaticBlock)[];
    scope: ClassBodyScope;
    type: NodeType.tClassBody;
    createScope(parentScope: ChildScope): void;
    include(context: InclusionContext, includeChildrenRecursively: IncludeChildren): void;
    parseNode(esTreeNode: GenericEsTreeNode): this;
}
