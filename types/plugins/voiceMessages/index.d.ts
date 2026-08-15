import "./styles.css";
import { NavContextMenuPatchCallback } from "../../api/ContextMenu";
import { OptionType } from "../../utils/types";
import { ComponentType } from "react";
import { VoiceMessageProps } from "./components/VoicePreview";
export declare const cl: (...args: import("../../utils/css").ClassNameFactoryArg[]) => string;
export type VoiceRecorder = React.ComponentType<{
    setAudioBlob(blob: Blob): void;
    onRecordingChange?(recording: boolean): void;
}>;
export declare let VoiceMessage: ComponentType<VoiceMessageProps>;
export declare const settings: import("../../utils/types").DefinedSettings<{
    noiseSuppression: {
        type: OptionType.BOOLEAN;
        description: string;
        default: true;
    };
    echoCancellation: {
        type: OptionType.BOOLEAN;
        description: string;
        default: true;
    };
}, {}>;
declare const _default: {
    name: string;
    description: string;
    tags: "Voice"[];
    authors: {
        name: string;
        id: bigint;
    }[];
    settings: import("../../utils/types").DefinedSettings<{
        noiseSuppression: {
            type: OptionType.BOOLEAN;
            description: string;
            default: true;
        };
        echoCancellation: {
            type: OptionType.BOOLEAN;
            description: string;
            default: true;
        };
    }, {}>;
    patches: {
        find: string;
        replacement: {
            match: RegExp;
            replace: string;
        };
    }[];
    VoiceMessage: any;
    contextMenus: {
        "channel-attach": NavContextMenuPatchCallback;
    };
} & Record<PropertyKey, any> & import("../../utils/types").Plugin;
export default _default;
