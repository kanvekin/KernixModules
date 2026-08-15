import type { Channel, Message } from "@vencord/discord-types";
export declare const settings: any;
declare const _default: {
    name: string;
    description: string;
    tags: ("Chat" | "Shortcuts")[];
    authors: {
        name: string;
        id: bigint;
    }[];
    isModified: true;
    settings: any;
    start(): void;
    stop(): void;
    onMessageClick(msg: Message, channel: Channel, event: MouseEvent): void;
} & Record<PropertyKey, any> & import("../../utils/types").Plugin;
export default _default;
