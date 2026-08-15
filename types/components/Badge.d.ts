import "./Badge.css";
import type { ComponentPropsWithoutRef, ComponentType, ReactNode, SVGProps } from "react";
export declare const BadgeVariants: readonly ["default", "expressive", "danger", "positive", "warning", "premium"];
export type BadgeVariant = typeof BadgeVariants[number];
export type BadgeProps = Omit<ComponentPropsWithoutRef<"div">, "children"> & {
    text: ReactNode;
    variant?: BadgeVariant;
    icon?: ComponentType<SVGProps<SVGSVGElement> & {
        size?: string;
    }>;
    color?: string;
    backgroundColor?: string;
};
export declare function Badge({ text, variant, icon: Icon, className, color, backgroundColor, style, ...restProps }: BadgeProps): import("react").JSX.Element;
