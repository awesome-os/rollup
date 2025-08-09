import type Variable from '../ast/variables/Variable';
export declare function assignExportsToMangledNames(exports: ReadonlySet<Variable>, exportsByName: Map<string, Variable>, exportNamesByVariable: Map<Variable, string[]>): void;
export declare function assignExportsToNames(exports: ReadonlySet<Variable>, exportsByName: Map<string, Variable>, exportNamesByVariable: Map<Variable, string[]>): void;
