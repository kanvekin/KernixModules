import "./styles.css";
import { OptionType } from "../../utils/types";
declare const _default: {
    name: string;
    description: string;
    tags: ("Customisation" | "Emotes" | "Reactions" | "Shortcuts")[];
    authors: {
        name: string;
        id: bigint;
    }[];
    isModified: true;
    settings: import("../../utils/types").DefinedSettings<{
        reactionCount: {
            description: string;
            type: OptionType.NUMBER;
            default: number;
        };
        frequentEmojis: {
            description: string;
            type: OptionType.BOOLEAN;
            restartNeeded: true;
            default: true;
        };
        rows: {
            description: string;
            type: OptionType.SLIDER;
            default: number;
            markers: number[];
            stickToMarkers: true;
        };
        columns: {
            description: string;
            type: OptionType.SLIDER;
            default: number;
            markers: number[];
            stickToMarkers: true;
        };
        compactMode: {
            description: string;
            type: OptionType.BOOLEAN;
            default: false;
        };
        scroll: {
            description: string;
            type: OptionType.BOOLEAN;
            default: true;
        };
    }, {}>;
    patches: ({
        find: string;
        replacement: {
            match: RegExp;
            replace: string;
        };
        predicate?: undefined;
        group?: undefined;
    } | {
        find: string;
        replacement: {
            match: RegExp;
            replace: string;
        };
        predicate: () => boolean;
        group?: undefined;
    } | {
        find: string;
        group: true;
        replacement: {
            match: RegExp;
            replace: string;
        }[];
        predicate?: undefined;
    } | {
        find: RegExp;
        replacement: {
            match: RegExp;
            replace: string;
        };
        predicate?: undefined;
        group?: undefined;
    })[];
    getMaxQuickReactions(): number;
    readonly reactionCount: number;
    applyScroll(emojis: any[], index: number): any[];
    onWheelWrapper(currentScrollValue: number, setScrollHook: (value: number) => void, emojisLength: number): ((e: WheelEvent) => void) | undefined;
} & Record<PropertyKey, any> & import("../../utils/types").Plugin;
export default _default;
