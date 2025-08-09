import type MagicString from 'magic-string';
import { type NodeRenderOptions, type RenderOptions } from '../../utils/renderHelpers';
import type { InclusionContext } from '../ExecutionContext';
import type ModuleScope from '../scopes/ModuleScope';
import type { ObjectPath } from '../utils/PathTracker';
import type ExportDefaultVariable from '../variables/ExportDefaultVariable';
import ClassDeclaration from './ClassDeclaration';
import FunctionDeclaration from './FunctionDeclaration';
import * as NodeType from './NodeType';
import { type ExpressionNode, type IncludeChildren, NodeBase } from './shared/Node';
export default class ExportDefaultDeclaration extends NodeBase {
    declaration: FunctionDeclaration | ClassDeclaration | ExpressionNode;
    needsBoundaries: true;
    scope: ModuleScope;
    type: NodeType.tExportDefaultDeclaration;
    variable: ExportDefaultVariable;
    private declarationName;
    include(context: InclusionContext, includeChildrenRecursively: IncludeChildren): void;
    includePath(path: ObjectPath, context: InclusionContext): void;
    initialise(): void;
    removeAnnotations(code: MagicString): void;
    render(code: MagicString, options: RenderOptions, nodeRenderOptions?: NodeRenderOptions): void;
    private renderNamedDeclaration;
    private renderVariableDeclaration;
}
