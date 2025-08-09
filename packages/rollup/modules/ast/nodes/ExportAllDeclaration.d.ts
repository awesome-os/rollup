import type MagicString from 'magic-string';
import type { NodeRenderOptions, RenderOptions } from '@rollup/types';
import type Identifier from './Identifier';
import type ImportAttribute from './ImportAttribute';
import type Literal from './Literal';
import type * as NodeType from './NodeType';
import { NodeBase } from './shared/Node';
export default class ExportAllDeclaration extends NodeBase {
    attributes: ImportAttribute[];
    exported: Identifier | Literal<string> | null;
    needsBoundaries: true;
    source: Literal<string>;
    type: NodeType.tExportAllDeclaration;
    hasEffects(): boolean;
    initialise(): void;
    render(code: MagicString, _options: RenderOptions, nodeRenderOptions?: NodeRenderOptions): void;
}
