import { OptionType } from "../../utils/types";
declare const _default: {
    name: string;
    description: string;
    tags: "Utility"[];
    authors: {
        name: string;
        id: bigint;
    }[];
    isModified: true;
    settings: import("../../utils/types").DefinedSettings<{
        domain: {
            type: OptionType.BOOLEAN;
            default: true;
            description: string;
            restartNeeded: true;
        };
        file: {
            type: OptionType.BOOLEAN;
            default: true;
            description: string;
            restartNeeded: true;
        };
        noDeleteSafety: {
            type: OptionType.BOOLEAN;
            default: true;
            description: string;
            restartNeeded: true;
        };
        confirmModal: {
            type: OptionType.BOOLEAN;
            description: string;
            default: true;
        };
    }, {}>;
    patches: {
        find: string;
        replacement: {
            match: RegExp;
            replace: string;
        };
        predicate: () => boolean;
    }[];
    HandleGuildDeleteModal(server: any): Promise<void>;
} & Record<PropertyKey, any> & import("../../utils/types").Plugin;
export default _default;
