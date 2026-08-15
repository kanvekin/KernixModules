import { ChatBarButtonFactory } from "../../api/ChatButtons";
import { ApplicationCommandInputType, ApplicationCommandOptionType } from "../../api/Commands";
import { NavContextMenuPatchCallback } from "../../api/ContextMenu";
import { OptionType } from "../../utils/types";
declare function SilentTypingChatIcon(): import("react").JSX.Element;
declare function shouldHideChatBarTypingIndicators(): boolean;
declare function shouldHideMembersListTypingIndicators(): boolean;
declare const _default: {
    name: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    description: string;
    dependencies: string[];
    tags: ("Chat" | "Privacy")[];
    isModified: true;
    settings: import("../../utils/types").DefinedSettings<{
        enabledGlobally: {
            type: OptionType.BOOLEAN;
            description: string;
            default: true;
        };
        hideChatBoxTypingIndicators: {
            type: OptionType.BOOLEAN;
            description: string;
            default: false;
        };
        hideMembersListTypingIndicators: {
            type: OptionType.BOOLEAN;
            description: string;
            default: false;
        };
        chatIcon: {
            type: OptionType.BOOLEAN;
            description: string;
            default: true;
        };
        chatIconLeftClickAction: {
            type: OptionType.SELECT;
            description: string;
            options: ({
                label: string;
                value: string;
                default?: undefined;
            } | {
                label: string;
                value: string;
                default: true;
            })[];
        };
        chatIconMiddleClickAction: {
            type: OptionType.SELECT;
            description: string;
            options: ({
                label: string;
                value: string;
                default?: undefined;
            } | {
                label: string;
                value: string;
                default: true;
            })[];
        };
        chatIconRightClickAction: {
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
        chatContextMenu: {
            type: OptionType.BOOLEAN;
            description: string;
            default: true;
        };
        defaultHidden: {
            type: OptionType.BOOLEAN;
            description: string;
            default: true;
        };
        alwaysEnableInActiveVoiceChat: {
            type: OptionType.BOOLEAN;
            description: string;
            default: false;
        };
        temporaryEnableThresholdServers: {
            type: OptionType.NUMBER;
            description: string;
            default: number;
        };
        temporaryEnableThresholdDirectMessages: {
            type: OptionType.NUMBER;
            description: string;
            default: number;
        };
        enabledLocations: {
            type: OptionType.STRING;
            description: string;
            default: string;
        };
        disabledLocations: {
            type: OptionType.STRING;
            description: string;
            default: string;
        };
    }, {}>;
    shouldHideChatBarTypingIndicators: typeof shouldHideChatBarTypingIndicators;
    shouldHideMembersListTypingIndicators: typeof shouldHideMembersListTypingIndicators;
    contextMenus: {
        "textarea-context": NavContextMenuPatchCallback;
    };
    chatBarButton: {
        icon: typeof SilentTypingChatIcon;
        render: ChatBarButtonFactory;
    };
    flux: {
        VOICE_STATE_UPDATES({ voiceStates }: any): void;
        MESSAGE_CREATE({ message }: any): void;
    };
    patches: ({
        find: string;
        replacement: {
            match: RegExp;
            replace: string;
        };
        group?: undefined;
    } | {
        find: string;
        group: true;
        replacement: {
            match: RegExp;
            replace: string;
        }[];
    })[];
    commands: {
        name: string;
        description: string;
        inputType: ApplicationCommandInputType.BUILT_IN;
        options: ({
            name: string;
            description: string;
            required: false;
            type: ApplicationCommandOptionType.STRING;
            choices: {
                name: string;
                label: string;
                value: string;
            }[];
        } | {
            name: string;
            description: string;
            required: false;
            type: ApplicationCommandOptionType.BOOLEAN;
            choices?: undefined;
        })[];
        execute: (args: import("@vencord/discord-types").CommandArgument[], ctx: import("@vencord/discord-types").CommandContext) => Promise<void>;
    }[];
    startTyping(channelId: string): Promise<void>;
} & Record<PropertyKey, any> & import("../../utils/types").Plugin;
export default _default;
