import type MagicString from 'magic-string';
import { type RenderOptions } from '../../utils/renderHelpers';
import type { HasEffectsContext, InclusionContext } from '../ExecutionContext';
import { type ObjectPath } from '../utils/PathTracker';
import * as NodeType from './NodeType';
import { NodeBase } from './shared/Node';
import { type ExpressionNode, type IncludeChildren } from '@rollup/types';
import type { DeclarationPatternNode } from './shared/Pattern';
import type { VariableKind } from './shared/VariableKinds';
export default class VariableDeclarator extends NodeBase {
    id: DeclarationPatternNode;
    init: ExpressionNode | null;
    type: NodeType.tVariableDeclarator;
    isUsingDeclaration: boolean;
    declareDeclarator(kind: VariableKind, isUsingDeclaration: boolean): void;
    deoptimizePath(path: ObjectPath): void;
    hasEffects(context: HasEffectsContext): boolean;
    include(context: InclusionContext, includeChildrenRecursively: IncludeChildren): void;
    removeAnnotations(code: MagicString): void;
    render(code: MagicString, options: RenderOptions): void;
    includeNode(): void;
}
