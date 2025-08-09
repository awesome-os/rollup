import type MagicString from 'magic-string';
import type { RollupAnnotation } from "../../rollup/types";
import { type RenderOptions } from '../../utils/renderHelpers';
import type { HasEffectsContext, InclusionContext } from '../ExecutionContext';
import type * as NodeType from './NodeType';
import { type IncludeChildren, NodeBase, type StatementNode } from './shared/Node';
export default class Program extends NodeBase {
    body: readonly StatementNode[];
    sourceType: 'module';
    type: NodeType.tProgram;
    invalidAnnotations?: readonly RollupAnnotation[];
    private hasCachedEffect;
    private hasLoggedEffect;
    hasCachedEffects(): boolean;
    hasEffects(context: HasEffectsContext): boolean;
    include(context: InclusionContext, includeChildrenRecursively: IncludeChildren): void;
    initialise(): void;
    render(code: MagicString, options: RenderOptions): void;
}
