import type { LiteralValueOrUnknown } from '@rollup/types';
import { Variable } from './Variable';

export default class UndefinedVariable extends Variable {
	constructor() {
		super('undefined');
	}

	getLiteralValueAtPath(): LiteralValueOrUnknown {
		return undefined;
	}
}
