import type MagicString from 'magic-string';
import type { NodeRenderOptions, RenderOptions } from '@rollup/types';
import type { HasEffectsContext, InclusionContext } from '@rollup/types';
import type { NodeInteractionAssigned } from '../NodeInteractions';
import { type ObjectPath } from '../utils/PathTracker';
import type LocalVariable from '../variables/LocalVariable';
import type { Variable } from '../variables/Variable';
import type * as NodeType from './NodeType';
import type { ExpressionEntity } from './shared/Expression';
import { NodeBase } from './shared/Node';
import { type ExpressionNode } from '@rollup/types';
import type { DeclarationPatternNode, PatternNode } from './shared/Pattern';
import type { VariableKind } from './shared/VariableKinds';
export default class AssignmentPattern extends NodeBase implements DeclarationPatternNode {
    left: PatternNode;
    right: ExpressionNode;
    type: NodeType.tAssignmentPattern;
    addExportedVariables(variables: readonly Variable[], exportNamesByVariable: ReadonlyMap<Variable, readonly string[]>): void;
    declare(kind: VariableKind, destructuredInitPath: ObjectPath, init: ExpressionEntity): LocalVariable[];
    deoptimizeAssignment(destructuredInitPath: ObjectPath, init: ExpressionEntity): void;
    deoptimizePath(path: ObjectPath): void;
    hasEffectsOnInteractionAtPath(path: ObjectPath, interaction: NodeInteractionAssigned, context: HasEffectsContext): boolean;
    hasEffectsWhenDestructuring(context: HasEffectsContext, destructuredInitPath: ObjectPath, init: ExpressionEntity): boolean;
    includeDestructuredIfNecessary(context: InclusionContext, destructuredInitPath: ObjectPath, init: ExpressionEntity): boolean;
    includeNode(context: InclusionContext): void;
    markDeclarationReached(): void;
    render(code: MagicString, options: RenderOptions, { isShorthandProperty }?: NodeRenderOptions): void;
    applyDeoptimizations(): void;
}
