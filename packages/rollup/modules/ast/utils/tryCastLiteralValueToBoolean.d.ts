import type { LiteralValueOrUnknown } from '../nodes/shared/Expression';
import { UnknownValue } from '../nodes/shared/Expression';
export declare function tryCastLiteralValueToBoolean(literalValue: LiteralValueOrUnknown): boolean | typeof UnknownValue;
