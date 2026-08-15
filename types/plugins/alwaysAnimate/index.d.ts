import { OptionType } from "../../utils/types";
declare const _default: {
    name: string;
    description: string;
    tags: ("Appearance" | "Fun")[];
    authors: {
        name: string;
        id: bigint;
    }[];
    settings: import("../../utils/types").DefinedSettings<{
        icons: {
            type: OptionType.BOOLEAN;
            description: string;
            default: true;
        };
        statusEmojis: {
            type: OptionType.BOOLEAN;
            description: string;
            default: true;
        };
        serverBanners: {
            type: OptionType.BOOLEAN;
            description: string;
            default: true;
        };
        nameplates: {
            type: OptionType.BOOLEAN;
            description: string;
            default: true;
        };
        roleGradients: {
            type: OptionType.BOOLEAN;
            description: string;
            default: true;
        };
    }, {}>;
    patches: ({
        find: string;
        predicate: () => boolean;
        all: true;
        noWarn: true;
        replacement: {
            match: RegExp;
            replace: (m: string, rest: string) => string;
        };
    } | {
        find: string;
        predicate: () => boolean;
        replacement: {
            match: RegExp;
            replace: string;
        };
        all?: undefined;
        noWarn?: undefined;
    } | {
        find: string;
        replacement: {
            match: RegExp;
            replace: string;
        };
        predicate?: undefined;
        all?: undefined;
        noWarn?: undefined;
    })[];
} & Record<PropertyKey, any> & import("../../utils/types").Plugin;
export default _default;
