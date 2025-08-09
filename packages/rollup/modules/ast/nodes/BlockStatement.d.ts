import type MagicString from 'magic-string';
import { type IncludeChildren, type StatementNode } from '@rollup/types';
import { type RenderOptions } from '../../utils/renderHelpers';
import type { HasEffectsContext, InclusionContext } from '../ExecutionContext';
import type ChildScope from '../scopes/ChildScope';
import * as NodeType from './NodeType';
import { StatementBase } from './shared/Node';
export default class BlockStatement extends StatementBase {
    body: readonly StatementNode[];
    type: NodeType.tBlockStatement;
    private get deoptimizeBody();
    private set deoptimizeBody(value);
    private get directlyIncluded();
    private set directlyIncluded(value);
    addImplicitReturnExpressionToScope(): void;
    createScope(parentScope: ChildScope): void;
    hasEffects(context: HasEffectsContext): boolean;
    include(context: InclusionContext, includeChildrenRecursively: IncludeChildren): void;
    initialise(): void;
    render(code: MagicString, options: RenderOptions): void;
}
