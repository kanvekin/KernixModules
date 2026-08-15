import { setColorPicker, setCreateScroller } from "../../webpack/common";
declare const _default: {
    name: string;
    description: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    required: true;
    patches: ({
        find: string;
        replacement: {
            match: RegExp;
            replace: string;
        };
    } | {
        find: RegExp;
        replacement: {
            match: RegExp;
            replace: string;
        };
    })[];
    setCreateScroller: typeof setCreateScroller;
    setColorPicker: typeof setColorPicker;
} & Record<PropertyKey, any> & import("../../utils/types").Plugin;
export default _default;
