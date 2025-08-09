import type { AstContext } from '../../Module';
import type { InternalModuleFormat } from 'rollup';
import type ExportDefaultDeclaration from '../nodes/ExportDefaultDeclaration';
import type Identifier from '../nodes/Identifier';
import type { ExpressionEntity } from '../nodes/shared/Expression';
import type { VariableKind } from '../nodes/shared/VariableKinds';
import type { ObjectPath } from '../utils/PathTracker';
import ExportDefaultVariable from '../variables/ExportDefaultVariable';
import LocalVariable from '../variables/LocalVariable';
import type Variable from '../variables/Variable';
import ChildScope from './ChildScope';
import type GlobalScope from './GlobalScope';
export default class ModuleScope extends ChildScope {
    parent: GlobalScope;
    constructor(parent: GlobalScope, context: AstContext);
    addDeclaration(identifier: Identifier, context: AstContext, init: ExpressionEntity, destructuredInitPath: ObjectPath, kind: VariableKind): LocalVariable;
    addExportDefaultDeclaration(name: string, exportDefaultDeclaration: ExportDefaultDeclaration, context: AstContext): ExportDefaultVariable;
    addNamespaceMemberAccess(): void;
    deconflict(format: InternalModuleFormat, exportNamesByVariable: ReadonlyMap<Variable, readonly string[]>, accessedGlobalsByScope: ReadonlyMap<ChildScope, ReadonlySet<string>>): void;
    findLexicalBoundary(): this;
    findVariable(name: string): Variable;
}
