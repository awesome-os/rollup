import type MagicString from 'magic-string';
import type { RenderOptions } from '@rollup/types';
import type { InclusionContext } from '@rollup/types';
import type { ObjectPath } from '../utils/PathTracker';
import type * as NodeType from './NodeType';
import IdentifierBase from './shared/IdentifierBase';
export default class JSXIdentifier extends IdentifierBase {
    type: NodeType.tJSXIdentifier;
    name: string;
    private isNativeElement;
    bind(): void;
    include(context: InclusionContext): void;
    includeNode(context: InclusionContext): void;
    includePath(path: ObjectPath, context: InclusionContext): void;
    render(code: MagicString, { snippets: { getPropertyAccess }, useOriginalName }: RenderOptions): void;
    private getType;
}
