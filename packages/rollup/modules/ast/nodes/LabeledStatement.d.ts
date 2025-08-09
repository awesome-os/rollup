import type MagicString from 'magic-string';
import { type RenderOptions } from '../../utils/renderHelpers';
import { type HasEffectsContext, type InclusionContext } from '../ExecutionContext';
import type Identifier from './Identifier';
import type * as NodeType from './NodeType';
import { StatementBase } from './shared/Node';
import { type IncludeChildren, type StatementNode } from '@rollup/types';
export default class LabeledStatement extends StatementBase {
    body: StatementNode;
    label: Identifier;
    type: NodeType.tLabeledStatement;
    hasEffects(context: HasEffectsContext): boolean;
    include(context: InclusionContext, includeChildrenRecursively: IncludeChildren): void;
    includeNode(context: InclusionContext): void;
    render(code: MagicString, options: RenderOptions): void;
}
