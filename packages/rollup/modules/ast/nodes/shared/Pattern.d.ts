import type { WritableEntity } from '@rollup/types';
import type { HasEffectsContext, InclusionContext } from '@rollup/types';
import type { ObjectPath } from '../../utils/PathTracker';
import type LocalVariable from '../../variables/LocalVariable';
import type { ExpressionEntity } from './Expression';
import type { Node } from '@rollup/types';
import type { VariableKind } from './VariableKinds';
export interface PatternNode extends WritableEntity, Node {
    deoptimizeAssignment(destructuredInitPath: ObjectPath, init: ExpressionEntity): void;
    hasEffectsWhenDestructuring(context: HasEffectsContext, destructuredInitPath: ObjectPath, init: ExpressionEntity): boolean;
    includeDestructuredIfNecessary(context: InclusionContext, destructuredInitPath: ObjectPath, init: ExpressionEntity): boolean;
    includePath(path: ObjectPath, context: InclusionContext): void;
}
export interface DeclarationPatternNode extends PatternNode {
    declare(kind: VariableKind, destructuredInitPath: ObjectPath, init: ExpressionEntity): LocalVariable[];
    markDeclarationReached(): void;
}
