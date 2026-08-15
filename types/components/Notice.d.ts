import "./Notice.css";
import type { ComponentPropsWithoutRef, ComponentType, ReactNode, SVGProps } from "react";
export declare const NoticeVariants: readonly ["info", "warning", "danger", "positive"];
export type NoticeVariant = typeof NoticeVariants[number];
export type NoticeProps = Omit<ComponentPropsWithoutRef<"div">, "children"> & {
    children: ReactNode;
    variant?: NoticeVariant;
    icon?: ComponentType<SVGProps<SVGSVGElement>>;
    action?: ReactNode;
    hidden?: boolean;
};
export declare function Notice({ children, variant, icon, action, hidden, className, ...restProps }: NoticeProps): import("react").JSX.Element;
export declare namespace Notice {
    var Info: (props: Omit<NoticeProps, "variant">) => import("react").JSX.Element;
    var Warning: (props: Omit<NoticeProps, "variant">) => import("react").JSX.Element;
    var Danger: (props: Omit<NoticeProps, "variant">) => import("react").JSX.Element;
    var Positive: (props: Omit<NoticeProps, "variant">) => import("react").JSX.Element;
}
