import { IconProps, OptionType } from "../../utils/types";
import type { ComponentType, PropsWithChildren, ReactNode } from "react";
declare const enum LayoutType {
    ROOT = 0,
    SECTION = 1,
    SIDEBAR_ITEM = 2,
    PANEL = 3,
    SPLIT = 4,
    CATEGORY = 5,
    ACCORDION = 6,
    LIST = 7,
    RELATED = 8,
    FIELD_SET = 9,
    TAB_ITEM = 10,
    STATIC = 11,
    BUTTON = 12,
    TOGGLE = 13,
    SLIDER = 14,
    SELECT = 15,
    RADIO = 16,
    NAVIGATOR = 17,
    CUSTOM = 18
}
type SettingsLocation = "top" | "aboveNitro" | "belowNitro" | "aboveActivity" | "belowActivity" | "bottom";
interface SettingsLayoutNode {
    type: LayoutType;
    key?: string;
    legacySearchKey?: string;
    getLegacySearchKey?(): string;
    useLabel?(): string;
    useTitle?(): string;
    buildLayout?(): SettingsLayoutNode[];
    icon?(): ReactNode;
    render?(): ReactNode;
    StronglyDiscouragedCustomComponent?(): ReactNode;
}
interface EntryOptions {
    key: string;
    title: string;
    panelTitle?: string;
    Component: ComponentType<{}>;
    Icon: ComponentType<IconProps>;
}
interface SettingsLayoutBuilder {
    key?: string;
    buildLayout(): SettingsLayoutNode[];
}
declare const _default: {
    name: string;
    description: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    required: true;
    settings: import("../../utils/types").DefinedSettings<{
        settingsLocation: {
            type: OptionType.SELECT;
            description: string;
            options: {
                label: string;
                value: SettingsLocation;
                default?: boolean;
            }[];
        };
        includeVencordInfoWhenCopying: {
            type: OptionType.BOOLEAN;
            description: string;
            default: true;
        };
    }, {}>;
    patches: ({
        find: string;
        replacement: ({
            match: RegExp;
            replace: string;
        } | {
            match: RegExp;
            replace: (m: string, _buildOverride: string, makeRow: string, component: string, props: string) => string;
        })[];
    } | {
        find: string;
        replacement: {
            match: RegExp;
            replace: string;
        };
    })[];
    buildEntry(options: EntryOptions): SettingsLayoutNode;
    buildLayout(originalLayoutBuilder: SettingsLayoutBuilder): SettingsLayoutNode[];
    customSections: ((SectionTypes: Record<string, string>) => {
        section: string;
        element: ComponentType;
        label: string;
        id?: string;
    })[];
    customEntries: EntryOptions[];
    readonly electronVersion: any;
    readonly chromiumVersion: any;
    getVersionInfo(support?: boolean): string;
    getInfoRows(): string[];
    getInfoString(): string;
    makeInfoElements(Component: ComponentType<React.PropsWithChildren>, props: PropsWithChildren): import("react").JSX.Element[];
} & Record<PropertyKey, any> & import("../../utils/types").Plugin;
export default _default;
