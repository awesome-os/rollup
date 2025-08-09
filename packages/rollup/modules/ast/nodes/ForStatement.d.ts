import type MagicString from 'magic-string';
import { type RenderOptions } from '../../utils/renderHelpers';
import type { HasEffectsContext, InclusionContext } from '../ExecutionContext';
import type ChildScope from '../scopes/ChildScope';
import type * as NodeType from './NodeType';
import { type ExpressionNode, type IncludeChildren, StatementBase, type StatementNode } from './shared/Node';
import type VariableDeclaration from './VariableDeclaration';
export default class ForStatement extends StatementBase {
    body: StatementNode;
    init: VariableDeclaration | ExpressionNode | null;
    test: ExpressionNode | null;
    type: NodeType.tForStatement;
    update: ExpressionNode | null;
    createScope(parentScope: ChildScope): void;
    hasEffects(context: HasEffectsContext): boolean;
    include(context: InclusionContext, includeChildrenRecursively: IncludeChildren): void;
    render(code: MagicString, options: RenderOptions): void;
}
