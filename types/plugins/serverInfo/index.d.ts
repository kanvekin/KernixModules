import { NavContextMenuPatchCallback } from "../../api/ContextMenu";
import { OptionType } from "../../utils/types";
export declare const settings: import("../../utils/types").DefinedSettings<{
    sorting: {
        type: OptionType.SELECT;
        description: string;
        options: ({
            label: string;
            value: string;
            default?: undefined;
        } | {
            label: string;
            value: string;
            default: true;
        })[];
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
    dependencies: string[];
    searchTerms: string[];
    isModified: true;
    contextMenus: {
        "guild-context": NavContextMenuPatchCallback;
        "guild-header-popout": NavContextMenuPatchCallback;
    };
    settings: import("../../utils/types").DefinedSettings<{
        sorting: {
            type: OptionType.SELECT;
            description: string;
            options: ({
                label: string;
                value: string;
                default?: undefined;
            } | {
                label: string;
                value: string;
                default: true;
            })[];
        };
    }, {}>;
} & Record<PropertyKey, any> & import("../../utils/types").Plugin;
export default _default;
