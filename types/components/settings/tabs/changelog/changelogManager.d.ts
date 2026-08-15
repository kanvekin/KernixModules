export interface ChangelogEntry {
    hash: string;
    author: string;
    message: string;
    timestamp?: number;
}
export interface UpdateSession {
    id: string;
    timestamp: number;
    fromHash: string;
    toHash: string;
    commits: ChangelogEntry[];
    newPlugins: string[];
    updatedPlugins: string[];
    newSettings?: Map<string, string[]> | Record<string, string[]>;
    type: "update" | "repository_fetch";
}
export type ChangelogHistory = UpdateSession[];
type KnownPluginSettingsMap = Map<string, Set<string>>;
export declare function getNewSettingsSize(newSettings: Map<string, string[]> | Record<string, string[]> | undefined): number;
export declare function getNewSettingsEntries(newSettings: Map<string, string[]> | Record<string, string[]> | undefined): [string, string[]][];
export declare function getChangelogHistory(): Promise<ChangelogHistory>;
export declare function saveUpdateSession(commits: ChangelogEntry[], newPlugins: string[], updatedPlugins: string[], newSettings: Map<string, string[]>, forceLog?: boolean): Promise<void>;
export declare function getLastSeenHash(): Promise<string | null>;
export declare function setLastSeenHash(hash: string): Promise<void>;
export declare function getKnownPlugins(): Promise<Set<string>>;
export declare function updateKnownPlugins(): Promise<void>;
export declare function getKnownSettings(): Promise<KnownPluginSettingsMap>;
export declare function getNewSettings(): Promise<Map<string, string[]>>;
export declare function getCommitsSinceLastSeen(repoUrl: string): Promise<ChangelogEntry[]>;
export declare function updateKnownSettings(): Promise<void>;
export declare function getNewPlugins(): Promise<string[]>;
export declare function getUpdatedPlugins(): Promise<string[]>;
export declare function clearChangelogHistory(): Promise<void>;
export declare function clearIndividualLog(logId: string): Promise<void>;
export declare function initializeChangelog(): Promise<void>;
export declare function getLastRepositoryCheckHash(): Promise<string | null>;
export declare function setLastRepositoryCheckHash(hash: string): Promise<void>;
export declare function formatTimestamp(timestamp: number): string;
export {};
