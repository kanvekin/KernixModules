import { OptionType } from "../../utils/types";
import { Embed } from "@vencord/discord-types";
interface ToggleableDescriptionProps {
    embed: Embed;
    original: () => any;
}
declare const _default: {
    name: string;
    description: string;
    tags: ("Media" | "Utility")[];
    authors: {
        name: string;
        id: bigint;
    }[];
    settings: import("../../utils/types").DefinedSettings<{
        youtubeDescription: {
            description: string;
            type: OptionType.BOOLEAN;
            default: false;
            restartNeeded: true;
        };
    }, {}>;
    patches: {
        find: string;
        predicate: () => boolean;
        replacement: {
            match: RegExp;
            replace: string;
        };
    }[];
    ToggleableDescription: import("react").FunctionComponent<ToggleableDescriptionProps>;
    ToggleableDescriptionWrapper(props: ToggleableDescriptionProps): import("react").JSX.Element;
} & Record<PropertyKey, any> & import("../../utils/types").Plugin;
export default _default;
