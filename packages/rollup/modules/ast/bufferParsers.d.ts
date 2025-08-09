import type { AstContext } from '../Module';
import type { Node } from '@rollup/types';
import Program from './nodes/Program';
import type ModuleScope from './scopes/ModuleScope';
export declare function convertProgram(buffer: Buffer | Uint8Array, parent: Node | {
    context: AstContext;
    type: string;
}, parentScope: ModuleScope): Program;
