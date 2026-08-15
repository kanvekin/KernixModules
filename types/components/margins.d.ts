declare const Directions: readonly ["top", "bottom", "left", "right"];
declare const Sizes: readonly [4, 8, 16, 20, 24, 40, 60];
export type MarginDirection = (typeof Directions)[number];
export type MarginSize = (typeof Sizes)[number];
export declare const Margins: Record<`${MarginDirection}${MarginSize}` | "reset" | "centerHorz", string>;
export declare function generateMarginCss(): string;
export {};
