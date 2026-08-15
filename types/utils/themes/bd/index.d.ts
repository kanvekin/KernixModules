export interface UserThemeHeader {
    fileName: string;
    name: string;
    author: string;
    description: string;
    version?: string;
    license?: string;
    source?: string;
    website?: string;
    invite?: string;
    content?: string;
    customName?: string;
}
export declare function stripBOM(fileContent: string): string;
export declare function getThemeInfo(css: string, fileName: string): UserThemeHeader;
