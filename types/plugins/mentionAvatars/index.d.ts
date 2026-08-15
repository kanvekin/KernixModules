import "./styles.css";
import { OptionType } from "../../utils/types";
import { User } from "@vencord/discord-types";
import { JSX } from "react";
declare const _default: {
    name: string;
    description: string;
    tags: ("Appearance" | "Customisation")[];
    authors: {
        name: string;
        id: bigint;
    }[];
    patches: {
        find: string;
        replacement: {
            match: RegExp;
            replace: string;
        };
    }[];
    settings: import("../../utils/types").DefinedSettings<{
        showAtSymbol: {
            type: OptionType.BOOLEAN;
            displayName: string;
            description: string;
            default: true;
        };
    }, {}>;
    renderUsername: import("react").FunctionComponent<{
        user: User;
        username: string;
        showMeYourNameMention: JSX.Element | null | undefined;
    }>;
    renderInputMention(username: string, user: User): string | JSX.Element;
    renderRoleIcon: import("react").FunctionComponent<{
        roleId: string;
        guildId: string;
    }>;
} & Record<PropertyKey, any> & import("../../utils/types").Plugin;
export default _default;
