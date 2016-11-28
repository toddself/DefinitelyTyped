// Type definitions for sheetify 6.0
// Project: https://github.com/stackcss/sheetify#readme
// Definitions by: Todd Kennedy <https://github.com/toddself>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace sheetify {
  export function getPrefix(css: string): string;
}

declare function sheetify(src: string, filename?: string, options?: {[prop: string]: any}, done?: (err: Error, css?: string, prefix?: string) => void): string;
declare function sheetify(src: string, options: {[prop: string]: any}): void;

export = sheetify;