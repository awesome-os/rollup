import type { AstContext, default as Module } from '../../Module';
import type { DeoptimizableEntity } from '../DeoptimizableEntity';
import type { HasEffectsContext, InclusionContext } from '../ExecutionContext';
import type { NodeInteraction, NodeInteractionCalled } from '../NodeInteractions';
import type ExportDefaultDeclaration from '../nodes/ExportDefaultDeclaration';
import type Identifier from '../nodes/Identifier';
import { type ExpressionEntity, type LiteralValueOrUnknown } from '../nodes/shared/Expression';
import type { VariableKind } from '../nodes/shared/VariableKinds';
import type { IncludedPathTracker } from '../utils/PathTracker';
import { type EntityPathTracker, type ObjectPath } from '../utils/PathTracker';
import { Variable } from './Variable';
export default class LocalVariable extends Variable {
    calledFromTryStatement: boolean;
    readonly declarations: (Identifier | ExportDefaultDeclaration)[];
    readonly module: Module;
    protected additionalInitializers: ExpressionEntity[] | null;
    protected deoptimizationTracker: EntityPathTracker;
    protected includedPathTracker: IncludedPathTracker;
    private expressionsToBeDeoptimized;
    init: ExpressionEntity;
    /** if this is non-empty, the actual init is this path of this.init */
    protected initPath: ObjectPath;
    readonly kind: VariableKind;
    constructor(name: string, declarator: Identifier | ExportDefaultDeclaration | null, init: ExpressionEntity, initPath: ObjectPath, context: AstContext, kind: VariableKind);
    addDeclaration(identifier: Identifier, init: ExpressionEntity): void;
    consolidateInitializers(): void;
    deoptimizeArgumentsOnInteractionAtPath(interaction: NodeInteraction, path: ObjectPath, recursionTracker: EntityPathTracker): void;
    deoptimizePath(path: ObjectPath): void;
    getLiteralValueAtPath(path: ObjectPath, recursionTracker: EntityPathTracker, origin: DeoptimizableEntity): LiteralValueOrUnknown;
    getReturnExpressionWhenCalledAtPath(path: ObjectPath, interaction: NodeInteractionCalled, recursionTracker: EntityPathTracker, origin: DeoptimizableEntity): [expression: ExpressionEntity, isPure: boolean];
    hasEffectsOnInteractionAtPath(path: ObjectPath, interaction: NodeInteraction, context: HasEffectsContext): boolean;
    includePath(path: ObjectPath, context: InclusionContext): void;
    includeCallArguments(interaction: NodeInteractionCalled, context: InclusionContext): void;
    markCalledFromTryStatement(): void;
    markInitializersForDeoptimization(): ExpressionEntity[];
}
