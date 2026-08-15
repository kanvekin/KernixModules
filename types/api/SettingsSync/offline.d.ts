type BackupType = "all" | "plugins" | "css" | "datastore";
export declare function importSettings(data: string, type?: BackupType, cloud?: boolean): Promise<void>;
export declare function exportSettings({ syncDataStore, type, minify }: {
    syncDataStore?: boolean;
    type?: BackupType;
    minify?: boolean;
}): Promise<string>;
export declare function downloadSettingsBackup(type?: BackupType, { minify }?: {
    minify?: boolean;
}): Promise<void>;
export declare function uploadSettingsBackup(type?: BackupType, showToast?: boolean): Promise<void>;
export {};
