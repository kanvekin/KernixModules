import "./style.css";
import { NavContextMenuPatchCallback } from "../../api/ContextMenu";
import { OptionType } from "../../utils/types";
import { Message, User } from "@vencord/discord-types";
import { JSX } from "react";
declare function validColor(color: string): boolean;
declare function validTemplate(value: string): boolean;
interface mentionProps {
    userId: string;
    channelId?: string;
    props?: {
        messageId?: string;
        groupId?: string;
    };
}
interface messageProps {
    message: Message | null | undefined;
    colorString?: string;
    colorStrings: colorStringsType;
    userOverride?: User;
    isRepliedMessage?: boolean;
    withMentionPrefix?: boolean;
}
interface memberListProfileReactionProps {
    user: User | null | undefined;
    type: "typingIndicator" | "membersList" | "profilesPopout" | "profilesTooltip" | "reactionsTooltip" | "reactionsPopout" | "voiceChannel";
    guildId?: string;
    tags?: any;
}
type colorStringsType = {
    primaryColor: string | null;
    secondaryColor: string | null;
    tertiaryColor: string | null;
} | null | undefined;
declare function getTypingMemberListProfilesReactionsVoiceNameText(props: memberListProfileReactionProps): string | null;
declare function getTypingMemberListProfilesReactionsVoiceNameElement(props: memberListProfileReactionProps): JSX.Element | null;
declare function getMessageName(props: messageProps): [string | null, JSX.Element | null, string | null];
declare function getMessageNameElement(props: messageProps): JSX.Element | null;
declare function getMessageNameText(props: messageProps): string | null;
declare function getMentionNameElement(props: mentionProps): JSX.Element | null;
declare function handleHoveringMessage(message: any, isHovering: boolean): void;
declare function addHoveringMessage(id: string): void;
declare function removeHoveringMessage(id: string): void;
declare function addHoveringReactionPopout(id: string): void;
declare function removeHoveringReactionPopout(id: string): void;
declare const _default: {
    name: string;
    description: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    tags: ("Appearance" | "Customisation")[];
    searchTerms: string[];
    isModified: true;
    settings: import("../../utils/types").DefinedSettings<{
        messages: {
            type: OptionType.BOOLEAN;
            default: true;
            description: string;
        };
        replies: {
            type: OptionType.BOOLEAN;
            default: true;
            description: string;
        };
        mentions: {
            type: OptionType.BOOLEAN;
            default: true;
            description: string;
        };
        typingIndicator: {
            type: OptionType.BOOLEAN;
            default: true;
            description: string;
        };
        memberList: {
            type: OptionType.BOOLEAN;
            default: true;
            description: string;
        };
        profilePopout: {
            type: OptionType.BOOLEAN;
            default: true;
            description: string;
        };
        voiceChannels: {
            type: OptionType.BOOLEAN;
            default: true;
            description: string;
        };
        reactions: {
            type: OptionType.BOOLEAN;
            default: true;
            description: string;
        };
        discriminators: {
            type: OptionType.BOOLEAN;
            default: true;
            description: string;
        };
        hideDefaultAtSign: {
            type: OptionType.BOOLEAN;
            default: false;
            description: string;
        };
        truncateAllNamesWithStreamerMode: {
            type: OptionType.BOOLEAN;
            default: true;
            description: string;
        };
        removeDuplicates: {
            type: OptionType.BOOLEAN;
            default: true;
            description: string;
        };
        ignoreFonts: {
            type: OptionType.BOOLEAN;
            default: false;
            description: string;
        };
        ignoreGradients: {
            type: OptionType.BOOLEAN;
            default: true;
            description: string;
        };
        animateGradients: {
            type: OptionType.BOOLEAN;
            default: false;
            description: string;
        };
        nameSeparator: {
            type: OptionType.STRING;
            description: string;
            default: string;
        };
        friendNameOnlyInDirectMessages: {
            type: OptionType.BOOLEAN;
            default: false;
            description: string;
        };
        customNameOnlyInDirectMessages: {
            type: OptionType.BOOLEAN;
            default: false;
            description: string;
        };
        alwaysShowEffects: {
            type: OptionType.BOOLEAN;
            default: false;
            description: string;
        };
        includedNames: {
            type: OptionType.STRING;
            description: string;
            default: string;
            isValid: typeof validTemplate;
        };
        customNameColor: {
            type: OptionType.STRING;
            description: string;
            default: string;
            isValid: typeof validColor;
        };
        friendNameColor: {
            type: OptionType.STRING;
            description: string;
            default: string;
            isValid: typeof validColor;
        };
        nicknameColor: {
            type: OptionType.STRING;
            description: string;
            default: string;
            isValid: typeof validColor;
        };
        displayNameColor: {
            type: OptionType.STRING;
            description: string;
            default: string;
            isValid: typeof validColor;
        };
        usernameColor: {
            type: OptionType.STRING;
            description: string;
            default: string;
            isValid: typeof validColor;
        };
        triggerNameRerender: {
            type: OptionType.BOOLEAN;
            description: string;
            default: false;
            hidden: true;
        };
    }, {}>;
    UserStore: any;
    patches: ({
        find: string;
        group: true;
        replacement: {
            match: RegExp;
            replace: string;
        }[];
    } | {
        find: string;
        replacement: {
            match: RegExp;
            replace: string;
        };
        group?: undefined;
    } | {
        find: string;
        replacement: ({
            match: RegExp;
            replace: string;
            predicate?: undefined;
        } | {
            match: RegExp;
            replace: string;
            predicate: () => boolean;
        })[];
        group?: undefined;
    })[];
    start(): Promise<void>;
    stop(): void;
    contextMenus: {
        "user-context": NavContextMenuPatchCallback;
    };
    flux: {
        RELATIONSHIP_UPDATE(data: any): void;
        RUNNING_STREAMER_TOOLS_CHANGE(data: any): void;
        ACCESSIBILITY_SYSTEM_PREFERS_REDUCED_MOTION_CHANGED(data: any): void;
        ACCESSIBILITY_SET_PREFERS_REDUCED_MOTION(data: any): void;
    };
    addHoveringMessage: typeof addHoveringMessage;
    removeHoveringMessage: typeof removeHoveringMessage;
    handleHoveringMessage: typeof handleHoveringMessage;
    addHoveringReactionPopout: typeof addHoveringReactionPopout;
    removeHoveringReactionPopout: typeof removeHoveringReactionPopout;
    getMessageName: typeof getMessageName;
    getMessageNameText: typeof getMessageNameText;
    getMessageNameElement: typeof getMessageNameElement;
    getMentionNameElement: typeof getMentionNameElement;
    getTypingMemberListProfilesReactionsVoiceNameText: typeof getTypingMemberListProfilesReactionsVoiceNameText;
    getTypingMemberListProfilesReactionsVoiceNameElement: typeof getTypingMemberListProfilesReactionsVoiceNameElement;
} & Record<PropertyKey, any> & import("../../utils/types").Plugin;
export default _default;
