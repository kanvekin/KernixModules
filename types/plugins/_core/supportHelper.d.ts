import { JSX } from "react";
interface clientData {
    name: string;
    version?: string | null | undefined;
    info?: string | boolean | null | undefined;
    spoofed?: string | null | undefined;
    shortHash?: string | null | undefined;
    hash?: string | null | undefined;
    dev?: boolean | null | undefined;
}
export declare function detectClient(): clientData;
declare const _default: {
    name: string;
    required: true;
    description: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    dependencies: string[];
    settings: import("../../utils/types").DefinedSettings<{}, {
        dismissedDevBuildWarning?: boolean;
    }>;
    patches: {
        find: string;
        replacement: {
            match: RegExp;
            replace: string;
        };
    }[];
    commands: {
        name: string;
        description: string;
        predicate: (ctx: import("@vencord/discord-types").CommandContext) => boolean;
        execute: () => Promise<{
            content: string;
        }>;
    }[];
    flux: {
        CHANNEL_SELECT({ channelId }: any): Promise<void>;
    };
    renderMessageAccessory(props: Record<string, any>): JSX.Element | null;
    renderContributorDmWarningCard: import("react").FunctionComponent<any>;
} & Record<PropertyKey, any> & import("../../utils/types").Plugin;
export default _default;
