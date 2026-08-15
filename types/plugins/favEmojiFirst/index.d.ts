import "./styles.css";
import { NavContextMenuPatchCallback } from "../../api/ContextMenu";
import { OptionType } from "../../utils/types";
interface EmojiResult {
    id?: string;
    name?: string;
    uniqueName?: string;
    surrogates?: string;
    type?: string;
    originalName?: string;
    guildId?: string;
    index?: number;
    useSpriteSheet?: boolean;
    names?: string[];
    emojiObject?: {
        id?: string;
        name?: string;
        surrogates?: string;
        guildId?: string;
        animated?: boolean;
    };
}
interface EmojiAutocompleteState {
    query?: {
        type?: string;
        query?: string;
        text?: string;
        queryText?: string;
        typeInfo?: {
            sentinel?: string;
        };
        results?: {
            emojis?: (EmojiResult[] & {
                sliceTo?: number;
            });
        };
    };
}
declare function injectAliasResults(emojis: EmojiResult[], queryText: string, channel: unknown, intention: unknown): EmojiResult[];
declare function AliasListSetting(): import("react").JSX.Element;
declare function ClearAllAliasesSetting(): import("react").JSX.Element;
declare const _default: {
    name: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    tags: ("Customisation" | "Emotes")[];
    description: string;
    dependencies: string[];
    settings: import("../../utils/types").DefinedSettings<{
        aliases: {
            type: OptionType.COMPONENT;
            description: string;
            component: typeof AliasListSetting;
        };
        clearAll: {
            type: OptionType.COMPONENT;
            description: string;
            component: typeof ClearAllAliasesSetting;
        };
    }, {}>;
    contextMenus: {
        "expression-picker": NavContextMenuPatchCallback;
        message: NavContextMenuPatchCallback;
        "message-actions": NavContextMenuPatchCallback;
        "textarea-context": NavContextMenuPatchCallback;
    };
    isModified: true;
    onBeforeMessageSend: (_channelId: string, messageObj: {
        content: string;
    }) => void;
    patches: ({
        find: string;
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
    })[];
    injectAliasResults: typeof injectAliasResults;
    start(): Promise<void>;
    stop(): void;
    sortEmojis(state: EmojiAutocompleteState): void;
} & Record<PropertyKey, any> & import("../../utils/types").Plugin;
export default _default;
