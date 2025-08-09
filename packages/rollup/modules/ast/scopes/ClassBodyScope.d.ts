import type ClassNode from '../nodes/shared/ClassNode';
import LocalVariable from '../variables/LocalVariable';
import ChildScope from './ChildScope';
export default class ClassBodyScope extends ChildScope {
    readonly instanceScope: ChildScope;
    readonly thisVariable: LocalVariable;
    constructor(parent: ChildScope, classNode: ClassNode);
    findLexicalBoundary(): ChildScope;
}
