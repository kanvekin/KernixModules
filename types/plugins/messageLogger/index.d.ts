import "./messageLogger.css";
import { NavContextMenuPatchCallback } from "../../api/ContextMenu";
import { OptionType } from "../../utils/types";
import { Message } from "@vencord/discord-types";
export declare function parseEditContent(content: string, message: Message, previousContent?: string): import("react").ReactNode[] | import("react").JSX.Element | import("react").JSX.Element[];
export declare const settings: import("../../utils/types").DefinedSettings<{
    deleteStyle: {
        type: OptionType.SELECT;
        description: string;
        default: string;
        options: ({
            label: string;
            value: string;
            default: true;
        } | {
            label: string;
            value: string;
            default?: undefined;
        })[];
        onChange: () => void;
    };
    logDeletes: {
        type: OptionType.BOOLEAN;
        description: string;
        default: true;
    };
    collapseDeleted: {
        type: OptionType.BOOLEAN;
        description: string;
        default: false;
        restartNeeded: true;
    };
    logEdits: {
        type: OptionType.BOOLEAN;
        description: string;
        default: true;
    };
    inlineEdits: {
        type: OptionType.BOOLEAN;
        description: string;
        default: true;
    };
    ignoreBots: {
        type: OptionType.BOOLEAN;
        description: string;
        default: false;
    };
    ignoreSelf: {
        type: OptionType.BOOLEAN;
        description: string;
        default: false;
    };
    ignoreSelfEdits: {
        type: OptionType.BOOLEAN;
        description: string;
        default: false;
    };
    ignoreUsers: {
        type: OptionType.STRING;
        description: string;
        default: string;
        multiline: true;
    };
    ignoreChannels: {
        type: OptionType.STRING;
        description: string;
        default: string;
        multiline: true;
    };
    ignoreGuilds: {
        type: OptionType.STRING;
        description: string;
        default: string;
        multiline: true;
    };
    showEditDiffs: {
        type: OptionType.BOOLEAN;
        description: string;
        default: false;
        onChange: (value: any) => void;
    };
    separatedDiffs: {
        type: OptionType.BOOLEAN;
        description: string;
        default: false;
    };
}, {}>;
declare const _default: {
    name: string;
    description: string;
    tags: ("Chat" | "Utility")[];
    authors: {
        name: string;
        id: bigint;
    }[];
    dependencies: string[];
    isModified: true;
    settings: import("../../utils/types").DefinedSettings<{
        deleteStyle: {
            type: OptionType.SELECT;
            description: string;
            default: string;
            options: ({
                label: string;
                value: string;
                default: true;
            } | {
                label: string;
                value: string;
                default?: undefined;
            })[];
            onChange: () => void;
        };
        logDeletes: {
            type: OptionType.BOOLEAN;
            description: string;
            default: true;
        };
        collapseDeleted: {
            type: OptionType.BOOLEAN;
            description: string;
            default: false;
            restartNeeded: true;
        };
        logEdits: {
            type: OptionType.BOOLEAN;
            description: string;
            default: true;
        };
        inlineEdits: {
            type: OptionType.BOOLEAN;
            description: string;
            default: true;
        };
        ignoreBots: {
            type: OptionType.BOOLEAN;
            description: string;
            default: false;
        };
        ignoreSelf: {
            type: OptionType.BOOLEAN;
            description: string;
            default: false;
        };
        ignoreSelfEdits: {
            type: OptionType.BOOLEAN;
            description: string;
            default: false;
        };
        ignoreUsers: {
            type: OptionType.STRING;
            description: string;
            default: string;
            multiline: true;
        };
        ignoreChannels: {
            type: OptionType.STRING;
            description: string;
            default: string;
            multiline: true;
        };
        ignoreGuilds: {
            type: OptionType.STRING;
            description: string;
            default: string;
            multiline: true;
        };
        showEditDiffs: {
            type: OptionType.BOOLEAN;
            description: string;
            default: false;
            onChange: (value: any) => void;
        };
        separatedDiffs: {
            type: OptionType.BOOLEAN;
            description: string;
            default: false;
        };
    }, {}>;
    contextMenus: {
        message: NavContextMenuPatchCallback;
        "channel-context": NavContextMenuPatchCallback;
        "thread-context": NavContextMenuPatchCallback;
        "user-context": NavContextMenuPatchCallback;
        "gdm-context": NavContextMenuPatchCallback;
    };
    start(): void;
    renderEdits: import("react").FunctionComponent<{
        message: Message;
    }>;
    makeEdit(newMessage: any, oldMessage: any): any;
    handleDelete(cache: any, data: {
        ids: string[];
        id: string;
        mlDeleted?: boolean;
    }, isBulk: boolean): any;
    shouldIgnore(message: any, isEdit?: boolean): any;
    EditMarker({ message, className, children, ...props }: any): import("react").JSX.Element;
    DELETED_MESSAGE_COUNT: () => {
        ast: (string | number | {
            "=0": string[];
            one: (string | (string | number)[])[];
            other: (string | (string | number)[])[];
        })[][];
    };
    patches: ({
        find: string;
        replacement: {
            match: RegExp;
            replace: string;
        }[];
        predicate?: undefined;
    } | {
        find: string;
        replacement: {
            match: RegExp;
            replace: string;
        };
        predicate?: undefined;
    } | {
        find: string;
        replacement: {
            match: RegExp;
            replace: string;
        };
        predicate: () => boolean;
    } | {
        find: string;
        replacement: {
            match: RegExp;
            replace: string;
        }[];
        predicate: () => boolean;
    })[];
} & Record<PropertyKey, any> & import("../../utils/types").Plugin;
export default _default;
