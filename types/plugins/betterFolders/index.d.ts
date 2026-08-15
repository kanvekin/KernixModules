import "./style.css";
import { OptionType } from "../../utils/types";
import { ReactNode } from "react";
declare enum FolderIconDisplay {
    Never = 0,
    Always = 1,
    MoreThanOneFolderExpanded = 2
}
type GuildTreeNode = {
    id: string | number;
    type?: string;
    parentId?: string | number | null;
    name?: string;
    children?: GuildTreeNode[];
    isBetterFoldersNested?: boolean;
    [key: string]: unknown;
};
type FolderRenderProps = {
    isBetterFolders?: boolean;
    folderNode?: GuildTreeNode;
};
type FolderDragItem = {
    type?: string;
    nodeId: string | number;
};
type FolderMentionProps = {
    mentionCount?: number;
    folderNode?: GuildTreeNode;
};
export declare const ExpandedGuildFolderStore: any;
export declare const SortedGuildStore: any;
export declare function getExpandedFolderIdSet(): Set<number>;
declare function closeFolders(): void;
export declare function getParentFolderId(childId: string | number): string | undefined;
export declare function getChildFolderIds(parentId: string | number): string[];
export declare const settings: import("../../utils/types").DefinedSettings<{
    sidebar: {
        type: OptionType.BOOLEAN;
        description: string;
        restartNeeded: true;
        default: true;
    };
    sidebarAnim: {
        type: OptionType.BOOLEAN;
        description: string;
        default: true;
    };
    closeAllFolders: {
        type: OptionType.BOOLEAN;
        description: string;
        default: false;
    };
    closeAllHomeButton: {
        type: OptionType.BOOLEAN;
        description: string;
        restartNeeded: true;
        default: false;
    };
    closeOthers: {
        type: OptionType.BOOLEAN;
        description: string;
        default: false;
    };
    closeServerFolder: {
        type: OptionType.BOOLEAN;
        description: string;
        default: false;
    };
    forceOpen: {
        type: OptionType.BOOLEAN;
        description: string;
        default: false;
    };
    enableNestedFolders: {
        type: OptionType.BOOLEAN;
        description: string;
        default: true;
    };
    keepIcons: {
        type: OptionType.BOOLEAN;
        description: string;
        restartNeeded: true;
        default: false;
    };
    showFolderIcon: {
        type: OptionType.SELECT;
        description: string;
        options: ({
            label: string;
            value: FolderIconDisplay;
            default?: undefined;
        } | {
            label: string;
            value: FolderIconDisplay;
            default: true;
        })[];
        restartNeeded: true;
    };
}, {
    nestedFolders: Record<string, string>;
}>;
declare const _default: {
    name: string;
    description: string;
    tags: ("Appearance" | "Organisation" | "Servers")[];
    authors: {
        name: string;
        id: bigint;
    }[];
    isModified: true;
    settings: import("../../utils/types").DefinedSettings<{
        sidebar: {
            type: OptionType.BOOLEAN;
            description: string;
            restartNeeded: true;
            default: true;
        };
        sidebarAnim: {
            type: OptionType.BOOLEAN;
            description: string;
            default: true;
        };
        closeAllFolders: {
            type: OptionType.BOOLEAN;
            description: string;
            default: false;
        };
        closeAllHomeButton: {
            type: OptionType.BOOLEAN;
            description: string;
            restartNeeded: true;
            default: false;
        };
        closeOthers: {
            type: OptionType.BOOLEAN;
            description: string;
            default: false;
        };
        closeServerFolder: {
            type: OptionType.BOOLEAN;
            description: string;
            default: false;
        };
        forceOpen: {
            type: OptionType.BOOLEAN;
            description: string;
            default: false;
        };
        enableNestedFolders: {
            type: OptionType.BOOLEAN;
            description: string;
            default: true;
        };
        keepIcons: {
            type: OptionType.BOOLEAN;
            description: string;
            restartNeeded: true;
            default: false;
        };
        showFolderIcon: {
            type: OptionType.SELECT;
            description: string;
            options: ({
                label: string;
                value: FolderIconDisplay;
                default?: undefined;
            } | {
                label: string;
                value: FolderIconDisplay;
                default: true;
            })[];
            restartNeeded: true;
        };
    }, {
        nestedFolders: Record<string, string>;
    }>;
    start(): void;
    stop(): void;
    patches: ({
        find: string;
        predicate: () => boolean;
        replacement: {
            match: RegExp;
            replace: string;
        }[];
        group?: undefined;
        all?: undefined;
    } | {
        find: string;
        predicate: () => boolean;
        replacement: {
            match: RegExp;
            replace: string;
        };
        group?: undefined;
        all?: undefined;
    } | {
        find: string;
        predicate: () => boolean;
        replacement: {
            match: RegExp;
            replace: (_: string, rest: string, ExpandedGuildFolderStore: string) => string;
        }[];
        group?: undefined;
        all?: undefined;
    } | {
        find: string;
        predicate: () => boolean;
        replacement: ({
            predicate: () => boolean;
            match: RegExp;
            replace: (_: string, isExpanded: string) => string;
        } | {
            predicate: () => boolean;
            match: RegExp;
            replace: string;
        })[];
        group?: undefined;
        all?: undefined;
    } | {
        find: string;
        replacement: {
            match: RegExp;
            replace: string;
        }[];
        predicate?: undefined;
        group?: undefined;
        all?: undefined;
    } | {
        find: string;
        predicate: () => boolean;
        group: true;
        replacement: ({
            match: RegExp;
            replace: (m: string, conditions: string, props: string) => string;
        } | {
            match: RegExp;
            replace: string;
        })[];
        all?: undefined;
    } | {
        find: string;
        all: true;
        replacement: {
            match: RegExp;
            replace: string;
        }[];
        predicate?: undefined;
        group?: undefined;
    } | {
        find: string;
        replacement: {
            match: RegExp;
            replace: string;
        };
        predicate?: undefined;
        group?: undefined;
        all?: undefined;
    })[];
    flux: {
        GUILD_SELECT({ guildId }: {
            guildId: string | null;
        }): void;
        CHANNEL_SELECT(data: any): void;
        TOGGLE_GUILD_FOLDER_EXPAND(data: any): void;
        LOGOUT(): void;
    };
    FolderSideBar: import("react").FunctionComponent<any>;
    closeFolders: typeof closeFolders;
    handleGuildNavigation(guildId: string | null | undefined): void;
    handleRouteNavigation(route: unknown): void;
    getGuildMentionCount(guildId: string): number;
    getFolderMentionMetaWithNested(props: FolderMentionProps | undefined): {
        mentionCount: number;
        hasNestedMention: boolean;
    };
    getFolderMentionCountWithNested(props: FolderMentionProps | undefined): number;
    getFolderIsMentionLowImportanceWithNested(props: FolderMentionProps | undefined, originalFlag: boolean): boolean;
    augmentFolderChildren(folderNode: GuildTreeNode, originalChildren: GuildTreeNode[]): GuildTreeNode[];
    getFolderNodeForRender(folderNode: GuildTreeNode): GuildTreeNode;
    getFolderGuildsListClassName(props: FolderRenderProps | undefined, baseClassName: string): string;
    renderFolderChild(node: GuildTreeNode, posInSet: number, setSize: number): ReactNode | null;
    handleFolderDrop(dragItem: FolderDragItem, targetNode: GuildTreeNode, _moveToBelow: boolean, isCombine: boolean): boolean;
    shouldShowCombineTarget(noCombine: boolean, targetNode: GuildTreeNode): boolean;
    getFolderAcceptTypes(targetNode: GuildTreeNode): string[];
    canDropOnFolder(dragItem: FolderDragItem, targetNode: GuildTreeNode, isCombine: boolean): boolean;
    wrapGuildNodeComponent(node: GuildTreeNode, originalComponent: () => ReactNode, isBetterFolders: boolean, expandedFolderIds?: Set<string | number>): string | number | bigint | boolean | Iterable<ReactNode> | Promise<string | number | bigint | boolean | import("react").ReactElement<unknown, string | import("react").JSXElementConstructor<any>> | import("react").ReactPortal | Iterable<ReactNode> | null | undefined> | import("react").JSX.Element | null | undefined;
    makeGuildsBarGuildListFilter(isBetterFolders: boolean): (child: any) => boolean;
    makeGuildsBarSidebarFilter(isBetterFolders: boolean): (child: any) => boolean;
    shouldShowFolderIconAndBackground(isBetterFolders: boolean, expandedFolderIds?: Set<string | number>): boolean;
    shouldShowTransition(props: any): boolean;
    shouldRenderContents(props: any, isExpanded: boolean): boolean;
} & Record<PropertyKey, any> & import("../../utils/types").Plugin;
export default _default;
