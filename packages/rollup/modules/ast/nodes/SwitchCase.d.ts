import type MagicString from 'magic-string';
import { type NodeRenderOptions, type RenderOptions } from '../../utils/renderHelpers';
import type { HasEffectsContext, InclusionContext } from '../ExecutionContext';
import type * as NodeType from './NodeType';
import { NodeBase } from './shared/Node';
import { type ExpressionNode, type IncludeChildren, type StatementNode } from '@rollup/types';
export default class SwitchCase extends NodeBase {
    consequent: readonly StatementNode[];
    needsBoundaries: true;
    test: ExpressionNode | null;
    type: NodeType.tSwitchCase;
    hasEffects(context: HasEffectsContext): boolean;
    include(context: InclusionContext, includeChildrenRecursively: IncludeChildren): void;
    render(code: MagicString, options: RenderOptions, nodeRenderOptions?: NodeRenderOptions): void;
}
