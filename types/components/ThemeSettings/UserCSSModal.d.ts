import { RenderModalProps } from "@vencord/discord-types";
import { UserstyleHeader } from "usercss-meta";
interface UserCSSSettingsModalProps {
    modalProps: RenderModalProps;
    theme: UserstyleHeader;
    onSettingsReset: () => void;
}
export declare function UserCSSSettingsModal({ modalProps, theme, onSettingsReset }: UserCSSSettingsModalProps): import("react").JSX.Element;
export {};
