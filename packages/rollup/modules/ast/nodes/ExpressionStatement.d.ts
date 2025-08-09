import type MagicString from 'magic-string';
import type { RenderOptions } from '../../utils/renderHelpers';
import type { InclusionContext } from '../ExecutionContext';
import { StatementBase } from './shared/Node';
import { type ExpressionNode } from '@rollup/types';
export default class ExpressionStatement extends StatementBase {
    directive?: string;
    expression: ExpressionNode;
    initialise(): void;
    removeAnnotations(code: MagicString): void;
    render(code: MagicString, options: RenderOptions): void;
    shouldBeIncluded(context: InclusionContext): boolean;
}
