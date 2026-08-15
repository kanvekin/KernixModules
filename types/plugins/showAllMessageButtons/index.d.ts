import { OptionType } from "../../utils/types";
declare const _default: {
    name: string;
    description: string;
    tags: ("Chat" | "Utility")[];
    authors: {
        name: string;
        id: bigint;
    }[];
    settings: import("../../utils/types").DefinedSettings<{
        noShiftDelete: {
            type: OptionType.BOOLEAN;
            description: string;
            default: true;
        };
        noShiftPin: {
            type: OptionType.BOOLEAN;
            description: string;
            default: true;
        };
        noQuickReacts: {
            default: true;
            restartNeeded: true;
            type: OptionType.BOOLEAN;
            description: string;
        };
    }, {}>;
    patches: {
        find: string;
        replacement: ({
            match: RegExp;
            replace: string;
            predicate?: undefined;
        } | {
            predicate: () => boolean;
            match: RegExp;
            replace: string;
        })[];
    }[];
    deleteMessage({ channel_id, id }: {
        channel_id: any;
        id: any;
    }): void;
    toggleMessagePin({ channel, message }: {
        channel: any;
        message: any;
    }): any;
} & Record<PropertyKey, any> & import("../../utils/types").Plugin;
export default _default;
