import "./AddonCard.css";
import type { MouseEventHandler, ReactNode } from "react";
interface Props {
    name: ReactNode;
    description: ReactNode;
    enabled: boolean;
    setEnabled: (enabled: boolean) => void;
    disabled?: boolean;
    isNew?: boolean;
    onMouseEnter?: MouseEventHandler<HTMLDivElement>;
    onMouseLeave?: MouseEventHandler<HTMLDivElement>;
    infoButton?: ReactNode;
    footer?: ReactNode;
    author?: ReactNode;
    customName?: string;
    customDescription?: string;
    onEditName?: (newName: string) => void;
    onEditDescription?: (newDescription: string) => void;
}
export declare function OnlineThemeCard({ disabled, isNew, name, infoButton, footer, author, enabled, setEnabled, description, onMouseEnter, onMouseLeave, customName, onEditName, }: Props): import("react").JSX.Element;
export {};
