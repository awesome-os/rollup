import type { AstContext } from '../Module';
import Program from './nodes/Program';
import type { Node } from './nodes/shared/Node';
import type ModuleScope from './scopes/ModuleScope';
export declare function convertProgram(buffer: Buffer | Uint8Array, parent: Node | {
    context: AstContext;
    type: string;
}, parentScope: ModuleScope): Program;
