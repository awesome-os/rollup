import type { AstContext } from '../../Module';
import type Identifier from '../nodes/Identifier';
import type { ExpressionEntity } from '../nodes/shared/Expression';
import type { VariableKind } from '../nodes/shared/VariableKinds';
import type { ObjectPath } from '../utils/PathTracker';
import type LocalVariable from '../variables/LocalVariable';
import ChildScope from './ChildScope';
export default class BlockScope extends ChildScope {
    constructor(parent: ChildScope);
    addDeclaration(identifier: Identifier, context: AstContext, init: ExpressionEntity, destructuredInitPath: ObjectPath, kind: VariableKind): LocalVariable;
}
