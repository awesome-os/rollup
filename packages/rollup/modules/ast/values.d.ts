import type { HasEffectsContext } from '@rollup/types';
import type { NodeInteractionCalled } from './NodeInteractions';
import type { LiteralValueOrBigInt } from './nodes/Literal';
import { ExpressionEntity } from './nodes/shared/Expression';
import { type ObjectPathKey } from './utils/PathTracker';
export interface MemberDescription {
    hasEffectsWhenCalled: ((interaction: NodeInteractionCalled, context: HasEffectsContext) => boolean) | null;
    returns: ExpressionEntity;
}
export type MemberDescriptions = Record<string, MemberDescription>;
export declare const UNDEFINED_EXPRESSION: ExpressionEntity;
export declare const UNKNOWN_LITERAL_BOOLEAN: ExpressionEntity;
export declare const UNKNOWN_LITERAL_NUMBER: ExpressionEntity;
export declare const UNKNOWN_LITERAL_STRING: ExpressionEntity;
export declare const literalStringMembers: MemberDescriptions;
export declare function getLiteralMembersForValue<T extends LiteralValueOrBigInt = LiteralValueOrBigInt>(value: T): MemberDescriptions;
export declare function hasMemberEffectWhenCalled(members: MemberDescriptions, memberName: ObjectPathKey, interaction: NodeInteractionCalled, context: HasEffectsContext): boolean;
export declare function getMemberReturnExpressionWhenCalled(members: MemberDescriptions, memberName: ObjectPathKey): [expression: ExpressionEntity, isPure: boolean];
