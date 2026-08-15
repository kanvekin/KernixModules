import "./Link.css";
import type { AnchorHTMLAttributes, DetailedHTMLProps, PropsWithChildren } from "react";
export interface LinkProps extends DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
    disabled?: boolean;
    useDefaultUnderlineStyles?: boolean;
}
export declare function Link({ disabled, useDefaultUnderlineStyles, href, rel, target, className, children, ...restProps }: PropsWithChildren<LinkProps>): import("react").JSX.Element;
