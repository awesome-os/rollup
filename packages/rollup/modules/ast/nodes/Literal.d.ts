import type MagicString from 'magic-string';
import type { HasEffectsContext } from '../ExecutionContext';
import type { NodeInteraction } from '../NodeInteractions';
import type { ObjectPath } from '../utils/PathTracker';
import type * as NodeType from './NodeType';
import { type ExpressionEntity, type LiteralValueOrUnknown } from './shared/Expression';
import { NodeBase } from './shared/Node';
import { type GenericEsTreeNode } from '@rollup/types';
export type LiteralValue = string | boolean | null | number | RegExp | undefined;
export type LiteralValueOrBigInt = LiteralValue | bigint;
export default class Literal<T extends LiteralValueOrBigInt = LiteralValueOrBigInt> extends NodeBase {
    bigint?: string;
    raw?: string;
    regex?: {
        flags: string;
        pattern: string;
    };
    type: NodeType.tLiteral;
    value: T;
    private members;
    deoptimizeArgumentsOnInteractionAtPath(): void;
    getLiteralValueAtPath(path: ObjectPath): LiteralValueOrUnknown;
    getReturnExpressionWhenCalledAtPath(path: ObjectPath): [expression: ExpressionEntity, isPure: boolean];
    hasEffectsOnInteractionAtPath(path: ObjectPath, interaction: NodeInteraction, context: HasEffectsContext): boolean;
    initialise(): void;
    parseNode(esTreeNode: GenericEsTreeNode): this;
    render(code: MagicString): void;
}
