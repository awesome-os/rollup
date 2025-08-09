import type { LiteralValueOrUnknown } from '@rollup/types';
import { UnknownValue } from '../nodes/shared/Expression';
export declare function tryCastLiteralValueToBoolean(literalValue: LiteralValueOrUnknown): boolean | typeof UnknownValue;
