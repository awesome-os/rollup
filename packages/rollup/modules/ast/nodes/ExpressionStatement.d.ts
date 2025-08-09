import type MagicString from 'magic-string';
import type { RenderOptions } from '../../utils/renderHelpers';
import type { InclusionContext } from '../ExecutionContext';
import { type ExpressionNode, StatementBase } from './shared/Node';
export default class ExpressionStatement extends StatementBase {
    directive?: string;
    expression: ExpressionNode;
    initialise(): void;
    removeAnnotations(code: MagicString): void;
    render(code: MagicString, options: RenderOptions): void;
    shouldBeIncluded(context: InclusionContext): boolean;
}
