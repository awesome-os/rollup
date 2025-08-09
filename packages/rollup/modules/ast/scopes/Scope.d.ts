import type { AstContext } from '../../Module';
import type Identifier from '../nodes/Identifier';
import type { ExpressionEntity } from '../nodes/shared/Expression';
import type { VariableKind } from '../nodes/shared/VariableKinds';
import type { ObjectPath } from '../utils/PathTracker';
import LocalVariable from '../variables/LocalVariable';
import type Variable from '../variables/Variable';
import type ChildScope from './ChildScope';
export default class Scope {
    readonly children: ChildScope[];
    readonly variables: Map<string, Variable>;
    hoistedVariables?: Map<string, LocalVariable>;
    addDeclaration(identifier: Identifier, context: AstContext, init: ExpressionEntity, destructuredInitPath: ObjectPath, kind: VariableKind): LocalVariable;
    addHoistedVariable(name: string, variable: LocalVariable): void;
    contains(name: string): boolean;
    findVariable(_name: string): Variable;
}
