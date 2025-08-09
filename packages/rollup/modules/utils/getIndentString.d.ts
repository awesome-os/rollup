import type Module from '../Module';
export default function getIndentString(modules: readonly Module[], options: {
    indent: true | string;
}): string;
