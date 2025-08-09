import { makeMap } from '../../rollup/makeMap';
import { EMPTY_PATH } from '../utils/PathTracker';
import IdentifierBase from './shared/IdentifierBase';
const IdentifierType = makeMap(['Reference', 'NativeElementName', 'Other']);
export default class JSXIdentifier extends IdentifierBase {
    constructor() {
        super(...arguments);
        this.isNativeElement = false;
    }
    bind() {
        const type = this.getType();
        if (type === IdentifierType.Reference) {
            this.variable = this.scope.findVariable(this.name);
            this.variable.addReference(this);
        }
        else if (type === IdentifierType.NativeElementName) {
            this.isNativeElement = true;
        }
    }
    include(context) {
        if (!this.included)
            this.includeNode(context);
    }
    includeNode(context) {
        this.included = true;
        if (!this.deoptimized)
            this.applyDeoptimizations();
        if (this.variable !== null) {
            this.scope.context.includeVariableInModule(this.variable, EMPTY_PATH, context);
        }
    }
    includePath(path, context) {
        if (!this.included) {
            this.included = true;
            if (this.variable !== null) {
                this.scope.context.includeVariableInModule(this.variable, path, context);
            }
        }
        else if (path.length > 0) {
            this.variable?.includePath(path, context);
        }
    }
    render(code, { snippets: { getPropertyAccess }, useOriginalName }) {
        if (this.variable) {
            const name = this.variable.getName(getPropertyAccess, useOriginalName);
            if (name !== this.name) {
                code.overwrite(this.start, this.end, name, {
                    contentOnly: true,
                    storeName: true
                });
            }
        }
        else if (this.isNativeElement &&
            this.scope.context.options.jsx.mode !== 'preserve') {
            code.update(this.start, this.end, JSON.stringify(this.name));
        }
    }
    getType() {
        switch (this.parent.type) {
            case 'JSXOpeningElement':
            case 'JSXClosingElement': {
                return this.name.startsWith(this.name.charAt(0).toUpperCase())
                    ? IdentifierType.Reference
                    : IdentifierType.NativeElementName;
            }
            case 'JSXMemberExpression': {
                return this.parent.object === this
                    ? IdentifierType.Reference
                    : IdentifierType.Other;
            }
            case 'JSXAttribute':
            case 'JSXNamespacedName': {
                return IdentifierType.Other;
            }
            default: {
                /* istanbul ignore next */
                throw new Error(`Unexpected parent node type for JSXIdentifier: ${this.parent.type}`);
            }
        }
    }
}
