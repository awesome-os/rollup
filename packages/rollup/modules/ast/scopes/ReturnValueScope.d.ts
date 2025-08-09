import type { NodeInteractionCalled } from '../NodeInteractions';
import { type ExpressionEntity } from '../nodes/shared/Expression';
import ParameterScope from './ParameterScope';
export default class ReturnValueScope extends ParameterScope {
    private returnExpression;
    private readonly returnExpressions;
    addReturnExpression(expression: ExpressionEntity): void;
    deoptimizeArgumentsOnCall({ args }: NodeInteractionCalled): void;
    getReturnExpression(): ExpressionEntity;
    deoptimizeAllParameters(): void;
    reassignAllParameters(): void;
    protected addArgumentToBeDeoptimized(_argument: ExpressionEntity): void;
    private updateReturnExpression;
}
