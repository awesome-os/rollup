import type ExternalModule from '../ExternalModule';
import Module from '../Module';
import { OrderedExecutionUnit } from "../rollup/types";
export declare const compareExecIndex: <T extends OrderedExecutionUnit>(unitA: T, unitB: T) => 1 | -1;
export declare function sortByExecutionOrder(units: OrderedExecutionUnit[]): void;
export declare function analyseModuleExecution(entryModules: readonly Module[]): {
    cyclePaths: string[][];
    orderedModules: Module[];
};
export declare function getCyclePath(module: Module, parent: Module, parents: ReadonlyMap<Module | ExternalModule, Module | null>): string[];
