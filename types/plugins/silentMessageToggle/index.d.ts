import { ChatBarButtonFactory } from "../../api/ChatButtons";
import { IconComponent, OptionType } from "../../utils/types";
declare let lastState: boolean;
export { lastState };
declare const _default: {
    name: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    description: string;
    dependencies: string[];
    tags: ("Chat" | "Utility")[];
    settings: import("../../utils/types").DefinedSettings<{
        persistState: {
            type: OptionType.SELECT;
            description: string;
            options: ({
                label: string;
                value: string;
                default: true;
            } | {
                label: string;
                value: string;
                default?: undefined;
            })[];
            onChange(newValue: string): void;
        };
        autoDisable: {
            type: OptionType.BOOLEAN;
            description: string;
            default: true;
        };
    }, {}>;
    chatBarButton: {
        icon: IconComponent;
        render: ChatBarButtonFactory;
    };
} & Record<PropertyKey, any> & import("../../utils/types").Plugin;
export default _default;
