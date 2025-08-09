import type MagicString from 'magic-string';
import type { RenderOptions } from '@rollup/types';
import type { InclusionContext } from '@rollup/types';
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
