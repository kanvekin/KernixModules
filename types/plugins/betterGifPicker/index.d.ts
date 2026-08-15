import { OptionType } from "../../utils/types";
declare const _default: {
    name: string;
    description: string;
    tags: ("Customisation" | "Emotes")[];
    authors: {
        name: string;
        id: bigint;
    }[];
    isModified: true;
    settings: import("../../utils/types").DefinedSettings<{
        keepOpen: {
            description: string;
            type: OptionType.BOOLEAN;
            default: false;
        };
    }, {}>;
    patches: ({
        find: string;
        replacement: {
            match: RegExp;
            replace: string;
        }[];
        predicate?: undefined;
    } | {
        find: string;
        predicate: () => boolean;
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
        predicate?: undefined;
    })[];
    onGifSelect(): void;
    consumeCloseSuppress(): boolean;
    shouldSuppressGifFocusScroll(): boolean;
} & Record<PropertyKey, any> & import("../../utils/types").Plugin;
export default _default;
