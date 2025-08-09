import type { HasEffectsContext } from '@rollup/types';
import type { DeoptimizableEntity } from '@rollup/types';
import type { NodeInteraction, NodeInteractionCalled } from '../../NodeInteractions';
import type { EntityPathTracker, ObjectPath } from '../../utils/PathTracker';
import { ExpressionEntity } from './Expression';

export class MultiExpression extends ExpressionEntity {
	private expressions: readonly ExpressionEntity[];

	constructor(expressions: readonly ExpressionEntity[]) {
		super();
		this.expressions = expressions;
	}

	deoptimizePath(path: ObjectPath): void {
		for (const expression of this.expressions) {
			expression.deoptimizePath(path);
		}
	}

	getReturnExpressionWhenCalledAtPath(
		path: ObjectPath,
		interaction: NodeInteractionCalled,
		recursionTracker: EntityPathTracker,
		origin: DeoptimizableEntity
	): [expression: ExpressionEntity, isPure: boolean] {
		return [
			new MultiExpression(
				this.expressions.map(
					expression =>
						expression.getReturnExpressionWhenCalledAtPath(
							path,
							interaction,
							recursionTracker,
							origin
						)[0]
				)
			),
			false
		];
	}

	hasEffectsOnInteractionAtPath(
		path: ObjectPath,
		interaction: NodeInteraction,
		context: HasEffectsContext
	): boolean {
		for (const expression of this.expressions) {
			if (expression.hasEffectsOnInteractionAtPath(path, interaction, context)) return true;
		}
		return false;
	}
}
