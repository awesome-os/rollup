import type MagicString from 'magic-string';
import type { RollupAnnotation } from "@rollup/types";
import { type RenderOptions } from '../../utils/renderHelpers';
import type { HasEffectsContext, InclusionContext } from '../ExecutionContext';
import type * as NodeType from './NodeType';
import { NodeBase } from './shared/Node';
import { type IncludeChildren, type StatementNode } from '@rollup/types';
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
