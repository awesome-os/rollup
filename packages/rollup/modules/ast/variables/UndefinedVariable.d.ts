import type { LiteralValueOrUnknown } from '@rollup/types';
import { Variable } from './Variable';
export default class UndefinedVariable extends Variable {
    constructor();
    getLiteralValueAtPath(): LiteralValueOrUnknown;
}
