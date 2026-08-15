import { OptionType } from "../../utils/types";
import { Message, User } from "@vencord/discord-types";
interface ChannelStreamDividerProps {
    type: "DIVIDER";
    content?: string;
    contentKey?: string;
    unreadId?: string;
}
interface ChannelStreamMessageProps {
    type: "MESSAGE" | "THREAD_STARTER_MESSAGE";
    content: Message;
}
interface ChannelStreamGroupProps {
    type: "MESSAGE_GROUP_BLOCKED" | "MESSAGE_GROUP_IGNORED";
    content: ChannelStreamMessageProps[] | any;
}
declare const _default: {
    name: string;
    description: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    tags: ("Accessibility" | "Chat")[];
    isModified: true;
    settings: import("../../utils/types").DefinedSettings<{
        alsoHideIgnoredUsers: {
            description: string;
            type: OptionType.BOOLEAN;
            default: true;
            restartNeeded: false;
        };
        disableNotifications: {
            description: string;
            type: OptionType.BOOLEAN;
            default: false;
            restartNeeded: false;
        };
        allowAutoModMessages: {
            description: string;
            type: OptionType.BOOLEAN;
            default: true;
            restartNeeded: false;
        };
        hideBlockedUserReplies: {
            description: string;
            type: OptionType.BOOLEAN;
            default: false;
            restartNeeded: false;
        };
        defaultHideUsers: {
            type: OptionType.BOOLEAN;
            description: string;
            default: true;
            restartNeeded: false;
        };
        overrideUsers: {
            type: OptionType.STRING;
            description: string;
            restartNeeded: false;
            default: string;
        };
    }, {}>;
    patches: ({
        find: string;
        replacement: {
            match: RegExp;
            replace: (_: string, props: string) => string;
        }[];
    } | {
        find: string;
        replacement: {
            match: RegExp;
            replace: string;
        }[];
    })[];
    keepSuppressedMessage(userId: string): boolean;
    shouldKeepMessage(message: Message): (boolean | {
        suppressed: boolean;
        hide: boolean;
    })[];
    disableNotification(message: Message): boolean;
    filterStream(channelStream: [ChannelStreamGroupProps | ChannelStreamMessageProps | ChannelStreamDividerProps]): [ChannelStreamDividerProps | ChannelStreamMessageProps | ChannelStreamGroupProps];
    isReplyToSuppressed(message: Message): {
        suppressed: boolean;
        hide: boolean;
    };
    isSuppressed(message: Message): {
        suppressed: boolean;
        hide: boolean;
    };
    getRelationshipStatus(user: User): {
        ignored: boolean;
        blocked: boolean;
    };
} & Record<PropertyKey, any> & import("../../utils/types").Plugin;
export default _default;
