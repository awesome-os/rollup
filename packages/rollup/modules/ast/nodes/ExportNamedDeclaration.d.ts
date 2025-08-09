import type MagicString from 'magic-string';
import type { NodeRenderOptions, RenderOptions } from '@rollup/types';
import type { HasEffectsContext } from '@rollup/types';
import { ClassDeclaration } from './ClassDeclaration';
import type ExportSpecifier from './ExportSpecifier';
import type FunctionDeclaration from './FunctionDeclaration';
import type ImportAttribute from './ImportAttribute';
import type Literal from './Literal';
import type * as NodeType from './NodeType';
import { NodeBase } from './shared/Node';
import type VariableDeclaration from './VariableDeclaration';
export default class ExportNamedDeclaration extends NodeBase {
    attributes: ImportAttribute[];
    declaration: FunctionDeclaration | ClassDeclaration | VariableDeclaration | null;
    needsBoundaries: true;
    source: Literal<string> | null;
    specifiers: readonly ExportSpecifier[];
    type: NodeType.tExportNamedDeclaration;
    bind(): void;
    hasEffects(context: HasEffectsContext): boolean;
    initialise(): void;
    removeAnnotations(code: MagicString): void;
    render(code: MagicString, options: RenderOptions, nodeRenderOptions?: NodeRenderOptions): void;
}
