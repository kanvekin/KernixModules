import { ApplicationCommandInputType, ApplicationCommandOptionType } from "../../api/Commands";
import { OptionType } from "../../utils/types";
import { CloudUpload } from "@vencord/discord-types";
declare const enum Methods {
    Random = 0,
    Consistent = 1,
    Timestamp = 2,
    Date = 3
}
export declare const tarExtMatcher: RegExp;
declare const _default: {
    name: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    description: string;
    dependencies: string[];
    tags: ("Privacy" | "Utility")[];
    isModified: true;
    settings: import("../../utils/types").DefinedSettings<{
        anonymiseByDefault: {
            description: string;
            type: OptionType.BOOLEAN;
            default: true;
        };
        spoilerMessages: {
            description: string;
            type: OptionType.BOOLEAN;
            default: false;
        };
        method: {
            description: string;
            type: OptionType.SELECT;
            options: ({
                label: string;
                value: Methods;
                default: true;
            } | {
                label: string;
                value: Methods;
                default?: undefined;
            })[];
        };
        randomisedLength: {
            description: string;
            type: OptionType.NUMBER;
            default: number;
        };
        consistent: {
            description: string;
            type: OptionType.STRING;
            default: string;
        };
        dateFormat: {
            description: string;
            type: OptionType.STRING;
            default: string;
        };
    }, {}>;
    patches: ({
        find: string;
        replacement: {
            match: RegExp;
            replace: string;
        }[];
    } | {
        find: string;
        replacement: {
            match: RegExp;
            replace: string;
        };
    })[];
    AnonymiseUploadButton: import("react").FunctionComponent<{
        upload: CloudUpload;
    }>;
    anonymise(upload: CloudUpload): string | undefined;
    commands: {
        name: string;
        description: string;
        inputType: ApplicationCommandInputType.BUILT_IN;
        options: {
            name: string;
            description: string;
            required: false;
            type: ApplicationCommandOptionType.BOOLEAN;
        }[];
        execute: (args: import("@vencord/discord-types").CommandArgument[], ctx: import("@vencord/discord-types").CommandContext) => Promise<void>;
    }[];
} & Record<PropertyKey, any> & import("../../utils/types").Plugin;
export default _default;
