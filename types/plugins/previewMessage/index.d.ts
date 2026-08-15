import { ChatBarButtonFactory } from "../../api/ChatButtons";
import { IconComponent, StartAt } from "../../utils/types";
declare const _default: {
    name: string;
    description: string;
    dependencies: string[];
    tags: ("Chat" | "Utility")[];
    authors: {
        name: string;
        id: bigint;
    }[];
    startAt: StartAt.Init;
    chatBarButton: {
        icon: IconComponent;
        render: ChatBarButtonFactory;
    };
} & Record<PropertyKey, any> & import("../../utils/types").Plugin;
export default _default;
