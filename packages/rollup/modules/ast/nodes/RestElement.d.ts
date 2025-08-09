import type { HasEffectsContext, InclusionContext } from '@rollup/types';
import type { NodeInteractionAssigned } from '../NodeInteractions';
import { type ObjectPath } from '../utils/PathTracker';
import type LocalVariable from '../variables/LocalVariable';
import type { Variable } from '../variables/Variable';
import type * as NodeType from './NodeType';
import { type ExpressionEntity } from './shared/Expression';
import type { IncludeChildren } from '@rollup/types';
import { NodeBase } from './shared/Node';
import type { DeclarationPatternNode, PatternNode } from './shared/Pattern';
import type { VariableKind } from './shared/VariableKinds';
export default class RestElement extends NodeBase implements DeclarationPatternNode {
    argument: PatternNode;
    type: NodeType.tRestElement;
    private declarationInit;
    addExportedVariables(variables: readonly Variable[], exportNamesByVariable: ReadonlyMap<Variable, readonly string[]>): void;
    declare(kind: VariableKind, destructuredInitPath: ObjectPath, init: ExpressionEntity): LocalVariable[];
    deoptimizeAssignment(destructuredInitPath: ObjectPath, init: ExpressionEntity): void;
    deoptimizePath(path: ObjectPath): void;
    hasEffectsOnInteractionAtPath(path: ObjectPath, interaction: NodeInteractionAssigned, context: HasEffectsContext): boolean;
    hasEffectsWhenDestructuring(context: HasEffectsContext, destructuredInitPath: ObjectPath, init: ExpressionEntity): boolean;
    includeDestructuredIfNecessary(context: InclusionContext, destructuredInitPath: ObjectPath, init: ExpressionEntity): boolean;
    include(context: InclusionContext, includeChildrenRecursively: IncludeChildren): void;
    markDeclarationReached(): void;
    applyDeoptimizations(): void;
}
