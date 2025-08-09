import type { AstContext } from '../../Module';
import type { DeoptimizableEntity } from '@rollup/types';
import type { InclusionContext } from '@rollup/types';
import { type HasEffectsContext } from '@rollup/types';
import type { NodeInteraction } from '../NodeInteractions';
import type ExportDefaultDeclaration from '../nodes/ExportDefaultDeclaration';
import Identifier from '../nodes/Identifier';
import type { ExpressionEntity } from '../nodes/shared/Expression';
import type { LiteralValueOrUnknown } from '@rollup/types';
import type { ObjectPath } from '../utils/PathTracker';
import { EntityPathTracker, IncludedTopLevelPathTracker } from '../utils/PathTracker';
import LocalVariable from './LocalVariable';
export default class ParameterVariable extends LocalVariable {
    protected includedPathTracker: IncludedTopLevelPathTracker;
    private argumentsToBeDeoptimized;
    private deoptimizationInteractions;
    private deoptimizations;
    private deoptimizedFields;
    private expressionsDependingOnKnownValue;
    private knownValue;
    private knownValueLiteral;
    constructor(name: string, declarator: Identifier | ExportDefaultDeclaration | null, argumentPath: ObjectPath, context: AstContext);
    addArgumentForDeoptimization(entity: ExpressionEntity): void;
    /** This says we should not make assumptions about the value of the parameter.
     *  This is different from deoptimization that will also cause argument values
     *  to be deoptimized. */
    markReassigned(): void;
    deoptimizeCache(): void;
    /**
     * Update the known value of the parameter variable.
     * Must be called for every function call, so it can track all the arguments,
     * and deoptimizeCache itself to mark reassigned if the argument is changed.
     * @param argument The argument of the function call
     */
    private updateKnownValue;
    /**
     * This function freezes the known value of the parameter variable,
     * so the optimization starts with a certain ExpressionEntity.
     * The optimization can be undone by calling `markReassigned`.
     * @returns the frozen value
     */
    private getKnownValue;
    getLiteralValueAtPath(path: ObjectPath, recursionTracker: EntityPathTracker, origin: DeoptimizableEntity): LiteralValueOrUnknown;
    hasEffectsOnInteractionAtPath(path: ObjectPath, interaction: NodeInteraction, context: HasEffectsContext): boolean;
    deoptimizeArgumentsOnInteractionAtPath(interaction: NodeInteraction, path: ObjectPath): void;
    deoptimizePath(path: ObjectPath): void;
    getReturnExpressionWhenCalledAtPath(path: ObjectPath): [expression: ExpressionEntity, isPure: boolean];
    includeArgumentPaths(entity: ExpressionEntity, context: InclusionContext): void;
}
