import "./styles.css";
import { OptionType } from "../../utils/types";
import { Message } from "@vencord/discord-types";
interface Rule {
    name?: string;
    find: string;
    replace: string;
    onlyIfIncludes: string;
    scope: string;
    id: string;
}
declare function modifyIncomingMessage(message: Message): string;
declare const _default: {
    name: string;
    description: string;
    dependencies: string[];
    tags: ("Chat" | "Customisation" | "Utility")[];
    authors: {
        name: string;
        id: bigint;
    }[];
    isModified: true;
    settings: import("../../utils/types").DefinedSettings<{
        replace: {
            type: OptionType.COMPONENT;
            component: () => import("react").JSX.Element;
        };
        stringRules: {
            type: OptionType.CUSTOM;
            default: Rule[];
            description: string;
        };
        regexRules: {
            type: OptionType.CUSTOM;
            default: Rule[];
            description: string;
        };
    }, {}>;
    modifyIncomingMessage: typeof modifyIncomingMessage;
    patches: {
        find: string;
        replacement: {
            match: RegExp;
            replace: string;
        };
    }[];
    start(): void;
    onBeforeMessageSend(channelId: string, msg: import("../../api/MessageEvents").MessageObject): void;
} & Record<PropertyKey, any> & import("../../utils/types").Plugin;
export default _default;
