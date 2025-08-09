import type Module from '../../Module';
import type { AstContext } from '../../Module';
import type { InclusionContext } from '../ExecutionContext';
import { type ObjectPath } from '../utils/PathTracker';
import Variable from './Variable';
export default class SyntheticNamedExportVariable extends Variable {
    readonly context: AstContext;
    readonly module: Module;
    readonly syntheticNamespace: Variable;
    private baseVariable;
    constructor(context: AstContext, name: string, syntheticNamespace: Variable);
    getBaseVariable(): Variable;
    getBaseVariableName(): string;
    getName(getPropertyAccess: (name: string) => string): string;
    includePath(path: ObjectPath, context: InclusionContext): void;
    setRenderNames(baseName: string | null, name: string | null): void;
}
