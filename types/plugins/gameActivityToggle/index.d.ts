import { UserAreaRenderProps } from "../../api/UserArea";
import { OptionType } from "../../utils/types";
declare function Icon({ className }: {
    className?: string;
}): import("react").JSX.Element;
declare function GameActivityToggleButton({ iconForeground, hideTooltips, nameplate }: UserAreaRenderProps): import("react").JSX.Element | null;
declare const _default: {
    name: string;
    description: string;
    tags: ("Activity" | "Shortcuts")[];
    authors: {
        name: string;
        id: bigint;
    }[];
    dependencies: string[];
    settings: import("../../utils/types").DefinedSettings<{
        oldIcon: {
            type: OptionType.BOOLEAN;
            description: string;
            default: false;
        };
        location: {
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
            readonly hidden: boolean;
        };
    }, {}>;
    userAreaButton: {
        icon: typeof Icon;
        render: typeof GameActivityToggleButton;
    };
    toolboxActions(): import("react").JSX.Element | null;
} & Record<PropertyKey, any> & import("../../utils/types").Plugin;
export default _default;
