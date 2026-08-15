import { OptionType } from "../../utils/types";
declare const _default: {
    name: string;
    description: string;
    tags: ("Activity" | "Utility")[];
    authors: {
        name: string;
        id: bigint;
    }[];
    isModified: true;
    settings: import("../../utils/types").DefinedSettings<{
        statusToSet: {
            type: OptionType.SELECT;
            description: string;
            options: ({
                label: string;
                value: string;
                default?: undefined;
            } | {
                label: string;
                value: string;
                default: true;
            })[];
        };
        excludeInvisible: {
            type: OptionType.BOOLEAN;
            description: string;
            default: false;
        };
    }, {}>;
    flux: {
        RUNNING_GAMES_CHANGE({ games }: any): void;
    };
} & Record<PropertyKey, any> & import("../../utils/types").Plugin;
export default _default;
