import type { AstContext } from '../../Module';
import type { InternalModuleFormat } from 'rollup';
import type ImportExpression from '../nodes/ImportExpression';
import type { ExpressionEntity } from '../nodes/shared/Expression';
import type Variable from '../variables/Variable';
import Scope from './Scope';
export default class ChildScope extends Scope {
    readonly parent: Scope;
    readonly context: AstContext;
    readonly accessedOutsideVariables: Map<string, Variable>;
    private accessedDynamicImports?;
    constructor(parent: Scope, context: AstContext);
    addAccessedDynamicImport(importExpression: ImportExpression): void;
    addAccessedGlobals(globals: readonly string[], accessedGlobalsByScope: Map<ChildScope, Set<string>>): void;
    addNamespaceMemberAccess(name: string, variable: Variable): void;
    addReturnExpression(expression: ExpressionEntity): void;
    addUsedOutsideNames(usedNames: Set<string>, format: InternalModuleFormat, exportNamesByVariable: ReadonlyMap<Variable, readonly string[]>, accessedGlobalsByScope: ReadonlyMap<ChildScope, ReadonlySet<string>>): void;
    contains(name: string): boolean;
    deconflict(format: InternalModuleFormat, exportNamesByVariable: ReadonlyMap<Variable, readonly string[]>, accessedGlobalsByScope: ReadonlyMap<ChildScope, ReadonlySet<string>>): void;
    findLexicalBoundary(): ChildScope;
    findGlobal(name: string): Variable;
    findVariable(name: string): Variable;
}
