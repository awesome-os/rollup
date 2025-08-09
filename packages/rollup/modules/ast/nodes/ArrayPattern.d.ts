import type { HasEffectsContext, InclusionContext } from '../ExecutionContext';
import type { NodeInteractionAssigned } from '../NodeInteractions';
import { type ObjectPath } from '../utils/PathTracker';
import type LocalVariable from '../variables/LocalVariable';
import type Variable from '../variables/Variable';
import type * as NodeType from './NodeType';
import type { ExpressionEntity } from './shared/Expression';
import { NodeBase } from './shared/Node';
import type { DeclarationPatternNode, PatternNode } from './shared/Pattern';
import type { VariableKind } from './shared/VariableKinds';
export default class ArrayPattern extends NodeBase implements DeclarationPatternNode {
    elements: (PatternNode | null)[];
    type: NodeType.tArrayPattern;
    addExportedVariables(variables: readonly Variable[], exportNamesByVariable: ReadonlyMap<Variable, readonly string[]>): void;
    declare(kind: VariableKind, destructuredInitPath: ObjectPath, init: ExpressionEntity): LocalVariable[];
    deoptimizeAssignment(destructuredInitPath: ObjectPath, init: ExpressionEntity): void;
    deoptimizePath(): void;
    hasEffectsWhenDestructuring(context: HasEffectsContext, destructuredInitPath: ObjectPath, init: ExpressionEntity): boolean;
    hasEffectsOnInteractionAtPath(_path: ObjectPath, interaction: NodeInteractionAssigned, context: HasEffectsContext): boolean;
    includeDestructuredIfNecessary(context: InclusionContext, destructuredInitPath: ObjectPath, init: ExpressionEntity): boolean;
    markDeclarationReached(): void;
}
