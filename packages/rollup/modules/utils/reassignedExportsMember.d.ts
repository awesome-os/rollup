import type { Variable } from '../ast/variables/Variable';
export declare function isReassignedExportsMember(variable: Variable, exportNamesByVariable: ReadonlyMap<Variable, readonly string[]>): boolean;
