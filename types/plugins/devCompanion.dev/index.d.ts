import { Logger } from "../../utils/Logger";
import { OptionType, ReporterTestable } from "../../utils/types";
import { stopWs } from "./initWs";
export declare const PORT = 8485;
export declare const CLIENT_VERSION: readonly [major: number, minor: number, patch: number];
export declare const logger: Logger;
export declare const settings: import("../../utils/types").DefinedSettings<{
    notifyOnAutoConnect: {
        description: string;
        type: OptionType.BOOLEAN;
        default: true;
    };
    usePatchedModule: {
        description: string;
        default: true;
        type: OptionType.BOOLEAN;
    };
    reloadAfterToggle: {
        description: string;
        default: true;
        type: OptionType.BOOLEAN;
    };
}, {}>;
declare const _default: {
    name: string;
    description: string;
    tags: ("Developers" | "Utility")[];
    authors: {
        name: string;
        id: bigint;
    }[];
    reporterTestable: ReporterTestable;
    isModified: true;
    settings: import("../../utils/types").DefinedSettings<{
        notifyOnAutoConnect: {
            description: string;
            type: OptionType.BOOLEAN;
            default: true;
        };
        usePatchedModule: {
            description: string;
            default: true;
            type: OptionType.BOOLEAN;
        };
        reloadAfterToggle: {
            description: string;
            default: true;
            type: OptionType.BOOLEAN;
        };
    }, {}>;
    toolboxActions: {
        Reconnect(): void;
    };
    start(): void;
    stop: typeof stopWs;
} & Record<PropertyKey, any> & import("../../utils/types").Plugin;
export default _default;
