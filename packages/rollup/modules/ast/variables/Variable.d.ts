import type ExternalModule from '../../ExternalModule';
import type Module from '../../Module';
import type { RenderOptions } from '../../utils/renderHelpers';
import type { HasEffectsContext, InclusionContext } from '../ExecutionContext';
import type { NodeInteraction } from '../NodeInteractions';
import { ExpressionEntity } from '../nodes/shared/Expression';
import type IdentifierBase from '../nodes/shared/IdentifierBase';
import type { NodeBase } from '../nodes/shared/Node';
import type { VariableKind } from '../nodes/shared/VariableKinds';
import type { ObjectPath } from '../utils/PathTracker';
export default class Variable extends ExpressionEntity {
    name: string;
    alwaysRendered: boolean;
    forbiddenNames: Set<string> | null;
    globalName: string | null;
    initReached: boolean;
    isId: boolean;
    isNamespace?: boolean;
    kind: VariableKind | null;
    module?: Module | ExternalModule;
    renderBaseName: string | null;
    renderName: string | null;
    private renderedLikeHoisted?;
    readonly isReassigned = false;
    markReassigned(): void;
    constructor(name: string);
    /**
     * Binds identifiers that reference this variable to this variable.
     * Necessary to be able to change variable names.
     */
    addReference(_identifier: IdentifierBase): void;
    private onlyFunctionCallUsed;
    /**
     * Check if the identifier variable is only used as function call
     * @returns true if the variable is only used as function call
     */
    getOnlyFunctionCallUsed(): boolean;
    /**
     * Collect the places where the identifier variable is used
     * @param usedPlace Where the variable is used
     */
    addUsedPlace(usedPlace: NodeBase): void;
    /**
     * Prevent this variable from being renamed to this name to avoid name
     * collisions
     */
    forbidName(name: string): void;
    getBaseVariableName(): string;
    getName(getPropertyAccess: (name: string) => string, useOriginalName?: RenderOptions['useOriginalName']): string;
    hasEffectsOnInteractionAtPath(path: ObjectPath, { type }: NodeInteraction, _context: HasEffectsContext): boolean;
    /**
     * Marks this variable as being part of the bundle, which is usually the case
     * when one of its identifiers becomes part of the bundle. Returns true if it
     * has not been included previously. Once a variable is included, it should
     * take care all its declarations are included.
     */
    includePath(path: ObjectPath, context: InclusionContext): void;
    /**
     * Links the rendered name of this variable to another variable and includes
     * this variable if the other variable is included.
     */
    renderLikeHoisted(variable: Variable): void;
    markCalledFromTryStatement(): void;
    setRenderNames(baseName: string | null, name: string | null): void;
}
