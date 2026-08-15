import type { ComponentType, MouseEventHandler, ReactNode } from "react";
export interface UserAreaButtonProps {
    icon: ReactNode;
    tooltipText?: ReactNode;
    onClick?: MouseEventHandler<HTMLDivElement>;
    onContextMenu?: MouseEventHandler<HTMLDivElement>;
    className?: string;
    role?: string;
    "aria-label"?: string;
    "aria-checked"?: boolean;
    disabled?: boolean;
    plated?: boolean;
    redGlow?: boolean;
    orangeGlow?: boolean;
}
export interface UserAreaRenderProps {
    nameplate?: any;
    iconForeground?: string;
    hideTooltips?: boolean;
}
export type UserAreaButtonFactory = (props: UserAreaRenderProps) => ReactNode;
export interface UserAreaButtonData {
    render: UserAreaButtonFactory;
    icon: ComponentType<{
        className?: string;
    }>;
    priority?: number;
}
interface ButtonEntry {
    render: UserAreaButtonFactory;
    priority: number;
}
export declare const UserAreaButton: ComponentType<UserAreaButtonProps>;
export declare const buttons: Map<string, ButtonEntry>;
export declare function addUserAreaButton(id: string, render: UserAreaButtonFactory, priority?: number): void;
export declare function removeUserAreaButton(id: string): void;
export declare function _renderButtons(props: UserAreaRenderProps): import("react").JSX.Element[];
export {};
