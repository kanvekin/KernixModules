import type { ComponentType, JSX, MouseEventHandler, ReactNode } from "react";
export interface HeaderBarButtonProps {
    /** The icon component to render inside the button */
    icon: ComponentType<any>;
    /** Tooltip text shown on hover. Pass null to disable tooltip */
    tooltip: ReactNode;
    /** Called when the button is clicked */
    onClick?: MouseEventHandler<HTMLDivElement>;
    /** Called when the button is right-clicked */
    onContextMenu?: MouseEventHandler<HTMLDivElement>;
    /** Additional CSS class names */
    className?: string;
    /** Size of the icon in pixels */
    iconSize?: number;
    /** Tooltip position relative to the button */
    position?: "top" | "bottom" | "left" | "right";
    /** Whether the button appears in a selected/active state */
    selected?: boolean;
    /** Aria label for accessibility */
    "aria-label"?: string;
}
export interface ChannelToolbarButtonProps extends HeaderBarButtonProps {
    /** CSS class name for the icon element */
    iconClassName?: string;
    /** Tooltip position relative to the button */
    position?: "top" | "bottom" | "left" | "right";
    /** Whether the button appears in a selected/active state */
    selected?: boolean;
    /** Whether the button is disabled */
    disabled?: boolean;
    /** Whether to show a notification badge */
    showBadge?: boolean;
    /** Position of the notification badge */
    badgePosition?: "top" | "bottom";
}
export type HeaderBarButtonFactory = () => JSX.Element | null;
export interface HeaderBarButtonData {
    /** Function that renders the button component */
    render: HeaderBarButtonFactory;
    /** Icon component used for settings UI display */
    icon: ComponentType<any>;
    /** Higher priority buttons appear further right. Default: 0 */
    priority?: number;
    /** Where to render the button. Default: "headerbar" */
    location?: "headerbar" | "channeltoolbar";
}
/**
 * Button component for the top header bar (title bar area).
 *
 * @example
 * <HeaderBarButton
 *     icon={MyIcon}
 *     tooltip="My Button"
 *     onClick={() => console.log("clicked")}
 * />
 */
export declare function HeaderBarButton(props: HeaderBarButtonProps & {
    ref?: React.RefObject<any>;
}): JSX.Element;
/**
 * Button component for the channel toolbar (below the search bar).
 * Automatically handles selected state styling.
 *
 * @example
 * <ChannelToolbarButton
 *     icon={MyIcon}
 *     tooltip={isOpen ? null : "My Button"}
 *     onClick={() => setOpen(v => !v)}
 *     selected={isOpen}
 * />
 */
export declare function ChannelToolbarButton(props: ChannelToolbarButtonProps): JSX.Element;
/**
 * Adds a button to the header bar (title bar area).
 *
 * @param id - Unique identifier for the button (e.g., "my-plugin-button")
 * @param render - Function that returns the button JSX
 * @param priority - Higher values appear further right. Default: 0
 *
 * @example
 * addHeaderBarButton("my-button", () => (
 *     <HeaderBarButton
 *         icon={MyIcon}
 *         tooltip="My Button"
 *         onClick={handleClick}
 *     />
 * ));
 */
export declare function addHeaderBarButton(id: string, render: HeaderBarButtonFactory, priority?: number): void;
/**
 * Removes a button from the header bar.
 *
 * @param id - The identifier used when adding the button
 */
export declare function removeHeaderBarButton(id: string): void;
/**
 * Adds a button to the channel toolbar (below the search bar, next to pins/members).
 *
 * @param id - Unique identifier for the button (e.g., "my-plugin-toolbar")
 * @param render - Function that returns the button JSX
 * @param priority - Higher values appear further right. Default: 0
 *
 * @example
 * addChannelToolbarButton("my-toolbar", () => (
 *     <ChannelToolbarButton
 *         icon={MyIcon}
 *         tooltip="My Button"
 *         onClick={handleClick}
 *     />
 * ));
 */
export declare function addChannelToolbarButton(id: string, render: HeaderBarButtonFactory, priority?: number): void;
/**
 * Removes a button from the channel toolbar.
 *
 * @param id - The identifier used when adding the button
 */
export declare function removeChannelToolbarButton(id: string): void;
/** @internal Injected by HeaderBarAPI patch (do NOT call directly) */
export declare function _addHeaderBarButtons(): JSX.Element[];
/** @internal Injected by HeaderBarAPI patch (do NOT call directly) */
export declare function _addChannelToolbarButtons(toolbar: ReactNode[]): void;
