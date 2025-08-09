import type { OutputBundleWithPlaceholders } from './outputBundle';
import { lowercaseBundleKeys } from './outputBundle';
export declare function renderNamePattern(pattern: string, patternName: string, replacements: Record<string, (size?: number) => string>): string;
export declare function makeUnique(name: string, { [lowercaseBundleKeys]: reservedLowercaseBundleKeys }: OutputBundleWithPlaceholders): string;
