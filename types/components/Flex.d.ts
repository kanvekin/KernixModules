import type { CSSProperties, HTMLAttributes } from "react";
export interface FlexProps extends HTMLAttributes<HTMLDivElement> {
    flexDirection?: CSSProperties["flexDirection"];
    gap?: CSSProperties["gap"];
    alignContent?: CSSProperties["alignContent"];
    justifyContent?: CSSProperties["justifyContent"];
    alignItems?: CSSProperties["alignItems"];
    flexWrap?: CSSProperties["flexWrap"];
}
export declare function Flex({ flexDirection, gap, alignContent, justifyContent, alignItems, flexWrap, children, style, ...restProps }: FlexProps): import("react").JSX.Element;
