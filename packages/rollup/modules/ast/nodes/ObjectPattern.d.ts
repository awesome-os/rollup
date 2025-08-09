import type MagicString from 'magic-string';
import type { RenderOptions } from '../../utils/renderHelpers';
import type { HasEffectsContext, InclusionContext } from '../ExecutionContext';
import type { NodeInteractionAssigned } from '../NodeInteractions';
import { type ObjectPath } from '../utils/PathTracker';
import type LocalVariable from '../variables/LocalVariable';
import type { Variable } from '../variables/Variable';
import * as NodeType from './NodeType';
import type Property from './Property';
import type RestElement from './RestElement';
import type { ExpressionEntity } from './shared/Expression';
import { NodeBase } from './shared/Node';
import type { DeclarationPatternNode } from './shared/Pattern';
import type { VariableKind } from './shared/VariableKinds';
export default class ObjectPattern extends NodeBase implements DeclarationPatternNode {
    properties: readonly (Property | RestElement)[];
    type: NodeType.tObjectPattern;
    addExportedVariables(variables: readonly Variable[], exportNamesByVariable: ReadonlyMap<Variable, readonly string[]>): void;
    declare(kind: VariableKind, destructuredInitPath: ObjectPath, init: ExpressionEntity): LocalVariable[];
    deoptimizeAssignment(destructuredInitPath: ObjectPath, init: ExpressionEntity): void;
    deoptimizePath(path: ObjectPath): void;
    hasEffectsOnInteractionAtPath(_path: ObjectPath, interaction: NodeInteractionAssigned, context: HasEffectsContext): boolean;
    hasEffectsWhenDestructuring(context: HasEffectsContext, destructuredInitPath: ObjectPath, init: ExpressionEntity): boolean;
    includeDestructuredIfNecessary(context: InclusionContext, destructuredInitPath: ObjectPath, init: ExpressionEntity): boolean;
    markDeclarationReached(): void;
    render(code: MagicString, options: RenderOptions): void;
}
