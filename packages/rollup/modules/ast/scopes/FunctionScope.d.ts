import type { InclusionContext } from '../ExecutionContext';
import type { NodeInteractionCalled } from '../NodeInteractions';
import type { ExpressionEntity } from '../nodes/shared/Expression';
import type { NodeBase } from '../nodes/shared/Node';
import ArgumentsVariable from '../variables/ArgumentsVariable';
import ThisVariable from '../variables/ThisVariable';
import type ChildScope from './ChildScope';
import ReturnValueScope from './ReturnValueScope';
export default class FunctionScope extends ReturnValueScope {
    readonly argumentsVariable: ArgumentsVariable;
    readonly thisVariable: ThisVariable;
    readonly functionNode: NodeBase;
    constructor(parent: ChildScope, functionNode: NodeBase);
    findLexicalBoundary(): ChildScope;
    includeCallArguments(interaction: NodeInteractionCalled, context: InclusionContext): void;
    protected addArgumentToBeDeoptimized(argument: ExpressionEntity): void;
}
