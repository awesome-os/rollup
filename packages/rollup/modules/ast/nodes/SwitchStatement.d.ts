import type MagicString from 'magic-string';
import { type RenderOptions } from '../../utils/renderHelpers';
import { type HasEffectsContext, type InclusionContext } from '../ExecutionContext';
import type ChildScope from '../scopes/ChildScope';
import type * as NodeType from './NodeType';
import type { ExpressionNode, GenericEsTreeNode, IncludeChildren } from '@rollup/types';
import { StatementBase } from './shared/Node';
import type SwitchCase from './SwitchCase';
export default class SwitchStatement extends StatementBase {
    cases: readonly SwitchCase[];
    discriminant: ExpressionNode;
    type: NodeType.tSwitchStatement;
    parentScope: ChildScope;
    private defaultCase;
    createScope(parentScope: ChildScope): void;
    hasEffects(context: HasEffectsContext): boolean;
    include(context: InclusionContext, includeChildrenRecursively: IncludeChildren): void;
    initialise(): void;
    parseNode(esTreeNode: GenericEsTreeNode): this;
    render(code: MagicString, options: RenderOptions): void;
}
