import type { AstContext } from '../../Module';
import type Identifier from '../nodes/Identifier';
import type { ExpressionEntity } from '../nodes/shared/Expression';
import type { VariableKind } from '../nodes/shared/VariableKinds';
import type { ObjectPath } from '../utils/PathTracker';
import type LocalVariable from '../variables/LocalVariable';
import ChildScope from './ChildScope';
import type ParameterScope from './ParameterScope';
export default class CatchBodyScope extends ChildScope {
    readonly parent: ParameterScope;
    constructor(parent: ParameterScope);
    addDeclaration(identifier: Identifier, context: AstContext, init: ExpressionEntity, destructuredInitPath: ObjectPath, kind: VariableKind): LocalVariable;
}
