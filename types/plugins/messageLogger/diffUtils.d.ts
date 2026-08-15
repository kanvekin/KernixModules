export interface DiffPart {
    type: "added" | "removed" | "unchanged";
    text: string;
}
export declare function createWordDiff(oldText: string, newText: string): DiffPart[];
export declare function createMessageDiff(previousContent: string, currentContent: string): DiffPart[];
