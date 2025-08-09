import type { AstContext } from '../../Module';
import type ExportDefaultDeclaration from '../nodes/ExportDefaultDeclaration';
import type IdentifierBase from '../nodes/shared/IdentifierBase';
import type { NodeBase } from '../nodes/shared/Node';
import LocalVariable from './LocalVariable';
import type { Variable } from './Variable';
export default class ExportDefaultVariable extends LocalVariable {
    hasId: boolean;
    private readonly originalId;
    private originalVariable;
    constructor(name: string, exportDefaultDeclaration: ExportDefaultDeclaration, context: AstContext);
    addReference(identifier: IdentifierBase): void;
    addUsedPlace(usedPlace: NodeBase): void;
    forbidName(name: string): void;
    getAssignedVariableName(): string | null;
    getBaseVariableName(): string;
    getDirectOriginalVariable(): Variable | null;
    getName(getPropertyAccess: (name: string) => string): string;
    getOriginalVariable(): Variable;
}
