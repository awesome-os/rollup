import type { Variable } from '../variables/Variable';
import Scope from './Scope';
export default class GlobalScope extends Scope {
    parent: null;
    constructor();
    findVariable(name: string): Variable;
}
