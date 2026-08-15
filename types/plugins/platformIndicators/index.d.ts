import "./style.css";
import { OptionType } from "../../utils/types";
export interface Session {
    sessionId: string;
    status: string;
    active: boolean;
    clientInfo: {
        version: number;
        os: string;
        client: string;
    };
}
declare const _default: {
    name: string;
    description: string;
    dependencies: string[];
    tags: "Appearance"[];
    authors: {
        name: string;
        id: bigint;
    }[];
    isModified: true;
    settings: import("../../utils/types").DefinedSettings<{
        list: {
            type: OptionType.BOOLEAN;
            description: string;
            default: true;
        };
        profiles: {
            type: OptionType.BOOLEAN;
            description: string;
            default: true;
        };
        messages: {
            type: OptionType.BOOLEAN;
            description: string;
            default: true;
        };
        colorMobileIndicator: {
            type: OptionType.BOOLEAN;
            description: string;
            default: true;
            restartNeeded: true;
        };
        showBots: {
            type: OptionType.BOOLEAN;
            description: string;
            default: false;
            restartNeeded: false;
        };
        ConsoleIcon: {
            type: OptionType.SELECT;
            description: string;
            restartNeeded: true;
            options: ({
                label: string;
                value: string;
                default: true;
            } | {
                label: string;
                value: string;
                default?: undefined;
            })[];
        };
    }, {}>;
    renderNicknameIcon(props: import("../../api/NicknameIcons").NicknameIconProps): import("react").JSX.Element | null;
    renderMemberListDecorator(props: import("../../api/MemberListDecorators").DecoratorProps): import("react").JSX.Element | null;
    renderMessageDecoration(props: import("../../api/MessageDecorations").MessageDecorationProps): import("react").JSX.Element | null;
    patches: ({
        find: string;
        predicate: () => boolean;
        replacement: {
            match: RegExp;
            replace: string;
        }[];
    } | {
        find: string;
        predicate: () => boolean;
        replacement: {
            match: RegExp;
            replace: string;
        };
    })[];
} & Record<PropertyKey, any> & import("../../utils/types").Plugin;
export default _default;
