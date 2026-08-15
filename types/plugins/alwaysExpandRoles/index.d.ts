import { OptionType } from "../../utils/types";
declare const _default: {
    name: string;
    description: string;
    tags: ("Appearance" | "Roles")[];
    authors: {
        name: string;
        id: bigint;
    }[];
    isModified: true;
    settings: import("../../utils/types").DefinedSettings<{
        hideArrow: {
            type: OptionType.BOOLEAN;
            default: false;
            description: string;
            restartNeeded: true;
        };
    }, {}>;
    patches: {
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
    }[];
} & Record<PropertyKey, any> & import("../../utils/types").Plugin;
export default _default;
