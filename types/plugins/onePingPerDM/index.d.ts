import { OptionType } from "../../utils/types";
import { MessageJSON } from "@vencord/discord-types";
declare const _default: {
    name: string;
    description: string;
    tags: ("Customisation" | "Notifications")[];
    authors: {
        name: string;
        id: bigint;
    }[];
    isModified: true;
    settings: import("../../utils/types").DefinedSettings<{
        channelToAffect: {
            type: OptionType.SELECT;
            description: string;
            options: ({
                label: string;
                value: string;
                default: true;
            } | {
                label: string;
                value: string;
                default?: undefined;
            })[];
        };
        allowMentions: {
            type: OptionType.BOOLEAN;
            description: string;
            default: false;
        };
        allowEveryone: {
            type: OptionType.BOOLEAN;
            description: string;
            default: false;
        };
        ignoreUsers: {
            type: OptionType.STRING;
            description: string;
            restartNeeded: true;
            default: string;
        };
        alwaysPlaySound: {
            type: OptionType.BOOLEAN;
            description: string;
            restartNeeded: true;
            default: false;
        };
    }, {}>;
    patches: {
        find: string;
        replacement: {
            match: RegExp;
            replace: string;
        }[];
    }[];
    playSound(): boolean;
    isPrivateChannelRead(message: MessageJSON): boolean;
} & Record<PropertyKey, any> & import("../../utils/types").Plugin;
export default _default;
