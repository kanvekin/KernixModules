import "./style.css";
import { OptionType } from "../../utils/types";
declare const _default: {
    name: string;
    description: string;
    tags: ("Appearance" | "Friends" | "Voice")[];
    dependencies: string[];
    authors: {
        name: string;
        id: bigint;
    }[];
    settings: import("../../utils/types").DefinedSettings<{
        showInUserProfileModal: {
            type: OptionType.BOOLEAN;
            description: string;
            default: true;
            restartNeeded: true;
        };
        showInMemberList: {
            type: OptionType.BOOLEAN;
            description: string;
            default: true;
            restartNeeded: true;
        };
        showInMessages: {
            type: OptionType.BOOLEAN;
            description: string;
            default: true;
            restartNeeded: true;
        };
    }, {}>;
    renderNicknameIcon({ userId }: import("../../api/NicknameIcons").NicknameIconProps): import("react").JSX.Element | null;
    renderMemberListDecorator({ user }: import("../../api/MemberListDecorators").DecoratorProps): import("react").JSX.Element | null;
    renderMessageDecoration({ message }: import("../../api/MessageDecorations").MessageDecorationProps): import("react").JSX.Element | null;
    patches: {
        find: string;
        replacement: {
            match: RegExp;
            replace: string;
        };
        predicate: () => boolean;
    }[];
    VoiceChannelIndicator: import("react").FunctionComponent<import("./components").VoiceChannelIndicatorProps>;
} & Record<PropertyKey, any> & import("../../utils/types").Plugin;
export default _default;
