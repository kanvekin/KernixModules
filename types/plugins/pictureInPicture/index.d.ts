import "./styles.css";
import { OptionType } from "../../utils/types";
declare const _default: {
    name: string;
    description: string;
    tags: ("Media" | "Utility")[];
    authors: {
        name: string;
        id: bigint;
    }[];
    settings: import("../../utils/types").DefinedSettings<{
        loop: {
            description: string;
            type: OptionType.BOOLEAN;
            default: true;
            restartNeeded: false;
        };
    }, {}>;
    patches: {
        find: string;
        replacement: {
            match: RegExp;
            replace: (_: string, rest: string, origChildren: string, mimeType: string, downloadURL: string, showDownload: string, isVisualMediaType: string) => string;
        };
    }[];
    shouldShowButton(mimeType?: string[], downloadURL?: string): boolean;
    PictureInPictureButton: import("react").FunctionComponent<any>;
} & Record<PropertyKey, any> & import("../../utils/types").Plugin;
export default _default;
