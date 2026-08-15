import "./style.css";
import { OptionType } from "../../utils/types";
import type { Channel, Role } from "@vencord/discord-types";
export declare const cl: (...args: import("../../utils/css").ClassNameFactoryArg[]) => string;
declare const enum ShowMode {
    LockIcon = 0,
    LockIconRight = 1,
    EyeIconRight = 2
}
declare const enum ChannelStyle {
    Classic = 0,
    Muted = 1,
    Unread = 2,
    MutedUnread = 3
}
export declare const settings: import("../../utils/types").DefinedSettings<{
    channelStyle: {
        description: string;
        type: OptionType.SELECT;
        options: ({
            label: string;
            value: ChannelStyle;
            default: true;
        } | {
            label: string;
            value: ChannelStyle;
            default?: undefined;
        })[];
        restartNeeded: true;
    };
    showMode: {
        description: string;
        type: OptionType.SELECT;
        options: ({
            label: string;
            value: ShowMode;
            default: true;
        } | {
            label: string;
            value: ShowMode;
            default?: undefined;
        })[];
        restartNeeded: true;
    };
    defaultAllowedUsersAndRolesDropdownState: {
        description: string;
        type: OptionType.BOOLEAN;
        default: true;
    };
}, {}>;
declare const _default: {
    name: string;
    description: string;
    tags: ("Servers" | "Utility")[];
    authors: {
        name: string;
        id: bigint;
    }[];
    isModified: true;
    settings: import("../../utils/types").DefinedSettings<{
        channelStyle: {
            description: string;
            type: OptionType.SELECT;
            options: ({
                label: string;
                value: ChannelStyle;
                default: true;
            } | {
                label: string;
                value: ChannelStyle;
                default?: undefined;
            })[];
            restartNeeded: true;
        };
        showMode: {
            description: string;
            type: OptionType.SELECT;
            options: ({
                label: string;
                value: ShowMode;
                default: true;
            } | {
                label: string;
                value: ShowMode;
                default?: undefined;
            })[];
            restartNeeded: true;
        };
        defaultAllowedUsersAndRolesDropdownState: {
            description: string;
            type: OptionType.BOOLEAN;
            default: true;
        };
    }, {}>;
    patches: ({
        find: string;
        replacement: {
            match: RegExp;
            replace: (m: string, channel: string) => string;
        };
        all?: undefined;
        predicate?: undefined;
    } | {
        find: string;
        all: true;
        replacement: {
            match: RegExp;
            replace: string;
        };
        predicate?: undefined;
    } | {
        find: string;
        predicate: () => boolean;
        replacement: {
            match: RegExp;
            replace: (m: string, channel: string) => string;
        };
        all?: undefined;
    } | {
        find: string;
        predicate: () => boolean;
        replacement: {
            predicate: () => boolean;
            match: RegExp;
            replace: (m: string, channel: string) => string;
        }[];
        all?: undefined;
    } | {
        find: string;
        predicate: () => boolean;
        replacement: {
            match: RegExp;
            replace: (_: string, otherClasses: string, isMuted: string, mutedClassExpression: string) => string;
        }[];
        all?: undefined;
    } | {
        find: string;
        replacement: {
            match: RegExp;
            replace: string;
        };
        all?: undefined;
        predicate?: undefined;
    } | {
        find: string;
        replacement: ({
            match: RegExp;
            replace: (m: string, pushNotificationButtonExpression: string, channel: string, isLurking: string) => string;
        } | {
            match: RegExp;
            replace: string;
        })[];
        all?: undefined;
        predicate?: undefined;
    })[];
    ChannelBeginHeader: any;
    swapViewChannelWithConnectPermission(mergedPermissions: bigint, channel: Channel): bigint;
    isHiddenChannel(channel: Channel & {
        channelId?: string;
    }, checkConnect?: boolean): boolean;
    resolveGuildChannels(channels: Record<string | number, Array<{
        channel: Channel;
        comparator: number;
    }> | string | number>, shouldIncludeHidden: boolean): {};
    makeAllowedRolesReduce(guildId: string): (Role[] | ((prev: Array<Role>, _: Role, index: number, originalArray: Array<Role>) => Role[]))[];
    HiddenChannelLockScreen: (channel: any) => import("react").JSX.Element;
    LockIcon: import("react").FunctionComponent<any>;
    EyeRightIcon: import("react").FunctionComponent<any>;
    LockRightIcon: import("react").FunctionComponent<any>;
} & Record<PropertyKey, any> & import("../../utils/types").Plugin;
export default _default;
