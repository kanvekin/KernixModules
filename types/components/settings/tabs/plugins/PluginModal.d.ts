import "./PluginModal.css";
import { Plugin } from "../../../../utils/types";
import { RenderModalProps, User } from "@vencord/discord-types";
interface PluginModalProps extends RenderModalProps {
    plugin: Plugin;
    onRestartNeeded(key: string): void;
}
export declare function makeDummyUser(user: {
    username: string;
    id?: string;
    avatar?: string;
}): Partial<User>;
export default function PluginModal({ plugin, onRestartNeeded, onClose, transitionState }: PluginModalProps): import("react").JSX.Element;
export declare function openPluginModal(plugin: Plugin, onRestartNeeded?: (pluginName: string, key: string) => void): void;
export declare function openWarningModal(plugin?: Plugin | null, onRestartNeeded?: (pluginName: string) => void, isPlugin?: boolean, enabledPlugins?: number | null, reset?: () => void): void;
export {};
