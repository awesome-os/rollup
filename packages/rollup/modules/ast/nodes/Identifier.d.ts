import '@rollup/types/declarations';
import type MagicString from 'magic-string';
import type { NodeRenderOptions, RenderOptions } from '@rollup/types';
import type { HasEffectsContext, InclusionContext } from '@rollup/types';
import type { ObjectPath } from '../utils/PathTracker';
import type LocalVariable from '../variables/LocalVariable';
import type { Variable } from '../variables/Variable';
import * as NodeType from './NodeType';
import { type ExpressionEntity } from './shared/Expression';
import IdentifierBase from './shared/IdentifierBase';
import type { DeclarationPatternNode } from './shared/Pattern';
import type { VariableKind } from './shared/VariableKinds';
export type IdentifierWithVariable = Identifier & {
    variable: Variable;
};
export default class Identifier extends IdentifierBase implements DeclarationPatternNode {
    name: string;
    type: NodeType.tIdentifier;
    variable: Variable | null;
    private get isDestructuringDeoptimized();
    private set isDestructuringDeoptimized(value);
    addExportedVariables(variables: Variable[], exportNamesByVariable: ReadonlyMap<Variable, readonly string[]>): void;
    bind(): void;
    declare(kind: VariableKind, destructuredInitPath: ObjectPath, init: ExpressionEntity): LocalVariable[];
    deoptimizeAssignment(destructuredInitPath: ObjectPath, init: ExpressionEntity): void;
    hasEffectsWhenDestructuring(context: HasEffectsContext, destructuredInitPath: ObjectPath, init: ExpressionEntity): boolean;
    includeDestructuredIfNecessary(context: InclusionContext, destructuredInitPath: ObjectPath, init: ExpressionEntity): boolean;
    markDeclarationReached(): void;
    render(code: MagicString, { snippets: { getPropertyAccess }, useOriginalName }: RenderOptions, { renderedParentType, isCalleeOfRenderedParent, isShorthandProperty }?: NodeRenderOptions): void;
}
