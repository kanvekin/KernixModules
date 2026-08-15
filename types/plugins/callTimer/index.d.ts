import { OptionType } from "../../utils/types";
import { PassiveUpdateState, VoiceState } from "@vencord/discord-types";
export declare const settings: import("../../utils/types").DefinedSettings<{
    format: {
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
    allCallTimers: {
        type: OptionType.BOOLEAN;
        description: string;
        restartNeeded: true;
        default: false;
    };
    showWithoutHover: {
        type: OptionType.BOOLEAN;
        description: string;
        restartNeeded: true;
        default: false;
    };
    showRoleColor: {
        type: OptionType.BOOLEAN;
        description: string;
        restartNeeded: false;
        default: false;
    };
    trackSelf: {
        type: OptionType.BOOLEAN;
        description: string;
        restartNeeded: false;
        default: false;
    };
    showSeconds: {
        type: OptionType.BOOLEAN;
        description: string;
        restartNeeded: false;
        default: false;
    };
    watchLargeGuilds: {
        type: OptionType.BOOLEAN;
        description: string;
        restartNeeded: true;
        default: false;
    };
}, {}>;
declare const _default: {
    name: string;
    description: string;
    tags: ("Utility" | "Voice")[];
    authors: {
        name: string;
        id: bigint;
    }[];
    managedStyle: string;
    settings: import("../../utils/types").DefinedSettings<{
        format: {
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
        allCallTimers: {
            type: OptionType.BOOLEAN;
            description: string;
            restartNeeded: true;
            default: false;
        };
        showWithoutHover: {
            type: OptionType.BOOLEAN;
            description: string;
            restartNeeded: true;
            default: false;
        };
        showRoleColor: {
            type: OptionType.BOOLEAN;
            description: string;
            restartNeeded: false;
            default: false;
        };
        trackSelf: {
            type: OptionType.BOOLEAN;
            description: string;
            restartNeeded: false;
            default: false;
        };
        showSeconds: {
            type: OptionType.BOOLEAN;
            description: string;
            restartNeeded: false;
            default: false;
        };
        watchLargeGuilds: {
            type: OptionType.BOOLEAN;
            description: string;
            restartNeeded: true;
            default: false;
        };
    }, {}>;
    isModified: true;
    startTime: number;
    interval: NodeJS.Timeout | undefined;
    patches: ({
        find: string;
        predicate: () => boolean;
        replacement: {
            match: RegExp;
            replace: string;
            predicate: () => boolean;
        }[];
    } | {
        find: string;
        replacement: {
            match: RegExp;
            replace: string;
        };
        predicate?: undefined;
    })[];
    flux: {
        VOICE_STATE_UPDATES({ voiceStates }: {
            voiceStates: VoiceState[];
        }): void;
        PASSIVE_UPDATE_V1(passiveUpdate: PassiveUpdateState): void;
    };
    subscribeToAllGuilds(): void;
    start(): void;
    renderTimer(userId: string): import("react").JSX.Element | undefined;
    renderConnectionTimer({ channelId }: {
        channelId: string | undefined;
    }): import("react").JSX.Element;
    ConnectionTimer: import("react").FunctionComponent<{
        channelId: string | undefined;
    }>;
} & Record<PropertyKey, any> & import("../../utils/types").Plugin;
export default _default;
