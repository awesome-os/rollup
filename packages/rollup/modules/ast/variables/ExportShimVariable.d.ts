import type Module from '../../Module';
import type { InclusionContext } from '@rollup/types';
import type { ObjectPath } from '../utils/PathTracker';
import { Variable } from './Variable';
export default class ExportShimVariable extends Variable {
    readonly module: Module;
    constructor(module: Module);
    includePath(path: ObjectPath, context: InclusionContext): void;
}
