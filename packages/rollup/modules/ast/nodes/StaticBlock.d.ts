import type MagicString from 'magic-string';
import { type RenderOptions } from '../../utils/renderHelpers';
import type { HasEffectsContext, InclusionContext } from '../ExecutionContext';
import type ChildScope from '../scopes/ChildScope';
import * as NodeType from './NodeType';
import { StatementBase } from './shared/Node';
import { type IncludeChildren, type StatementNode } from '@rollup/types';
export default class StaticBlock extends StatementBase {
    body: readonly StatementNode[];
    type: NodeType.tStaticBlock;
    createScope(parentScope: ChildScope): void;
    hasEffects(context: HasEffectsContext): boolean;
    include(context: InclusionContext, includeChildrenRecursively: IncludeChildren): void;
    render(code: MagicString, options: RenderOptions): void;
}
export declare function isStaticBlock(statement: StatementNode): statement is StaticBlock;
