export type NestedFolderMap = Record<string, string>;
export interface GuildFolderLike {
    folderId?: string | number | null;
    guildIds?: string[];
}
export declare function getChildFolderIds(map: NestedFolderMap, parentId: string | number): string[];
export declare function hasParentInChain(map: NestedFolderMap, childId: string, parentId: string): boolean;
export declare function areNestedRelated(map: NestedFolderMap, firstId: string, secondId: string): boolean;
export declare function getAncestorFolderIds(map: NestedFolderMap, childId: string | number): string[];
export declare function getDescendantFolderIds(map: NestedFolderMap, parentId: string | number): string[];
export declare function sanitizeNestedFolderMap(map: NestedFolderMap, validFolderIds: Set<string>): NestedFolderMap;
export declare function getGuildFolderId(folders: GuildFolderLike[], guildId: string | null | undefined): string | undefined;
export declare function getGuildNavigationExpandTargets(map: NestedFolderMap, folders: GuildFolderLike[], guildId: string | null | undefined, expandedFolderIds: Iterable<string | number>): string[];
