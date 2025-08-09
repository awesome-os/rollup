import type MagicString from 'magic-string';
import { type RenderOptions } from '../../utils/renderHelpers';
import type { HasEffectsContext, InclusionContext } from '../ExecutionContext';
import type ChildScope from '../scopes/ChildScope';
import type * as NodeType from './NodeType';
import { StatementBase } from './shared/Node';
import { type ExpressionNode, type IncludeChildren, type StatementNode } from '@rollup/types';
import type { PatternNode } from './shared/Pattern';
import type VariableDeclaration from './VariableDeclaration';
export default class ForInStatement extends StatementBase {
    body: StatementNode;
    left: VariableDeclaration | PatternNode;
    right: ExpressionNode;
    type: NodeType.tForInStatement;
    createScope(parentScope: ChildScope): void;
    hasEffects(context: HasEffectsContext): boolean;
    include(context: InclusionContext, includeChildrenRecursively: IncludeChildren): void;
    includeNode(context: InclusionContext): void;
    initialise(): void;
    render(code: MagicString, options: RenderOptions): void;
    applyDeoptimizations(): void;
}
