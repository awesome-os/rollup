import { checkEffectForNodes } from '../utils/checkEffectForNodes';
import { UNKNOWN_PATH } from '../utils/PathTracker';
import { isFlagSet, setFlag } from './shared/BitFlags';
import { Flag } from "./shared/BitFlags";
import { UNKNOWN_RETURN_EXPRESSION, UnknownValue } from './shared/Expression';
import {} from '@rollup/types';
import { doNotDeoptimize, NodeBase } from './shared/Node';
import {} from '@rollup/types';
export default class PropertyDefinition extends NodeBase {
    get computed() {
        return isFlagSet(this.flags, Flag.computed);
    }
    set computed(value) {
        this.flags = setFlag(this.flags, Flag.computed, value);
    }
    deoptimizeArgumentsOnInteractionAtPath(interaction, path, recursionTracker) {
        this.value?.deoptimizeArgumentsOnInteractionAtPath(interaction, path, recursionTracker);
    }
    deoptimizePath(path) {
        this.value?.deoptimizePath(path);
    }
    getLiteralValueAtPath(path, recursionTracker, origin) {
        return this.value
            ? this.value.getLiteralValueAtPath(path, recursionTracker, origin)
            : UnknownValue;
    }
    getReturnExpressionWhenCalledAtPath(path, interaction, recursionTracker, origin) {
        return this.value
            ? this.value.getReturnExpressionWhenCalledAtPath(path, interaction, recursionTracker, origin)
            : UNKNOWN_RETURN_EXPRESSION;
    }
    hasEffects(context) {
        return (this.key.hasEffects(context) ||
            (this.static && !!this.value?.hasEffects(context)) ||
            checkEffectForNodes(this.decorators, context));
    }
    hasEffectsOnInteractionAtPath(path, interaction, context) {
        return !this.value || this.value.hasEffectsOnInteractionAtPath(path, interaction, context);
    }
    includeNode(context) {
        this.included = true;
        this.value?.includePath(UNKNOWN_PATH, context);
        for (const decorator of this.decorators) {
            decorator.includePath(UNKNOWN_PATH, context);
        }
    }
}
PropertyDefinition.prototype.applyDeoptimizations = doNotDeoptimize;
