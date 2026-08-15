import "./style.css";
import { NavContextMenuPatchCallback } from "../../api/ContextMenu";
import { User } from "@vencord/discord-types";
import { initAuth } from "./auth";
declare const _default: {
    name: string;
    description: string;
    dependencies: string[];
    tags: ("Friends" | "Servers")[];
    authors: {
        name: string;
        id: bigint;
    }[];
    isModified: true;
    settings: import("../../utils/types").DefinedSettings<{
        authorize: {
            type: import("../../utils/types").OptionType.COMPONENT;
            component: () => import("react").JSX.Element;
        };
        notifyReviews: {
            type: import("../../utils/types").OptionType.BOOLEAN;
            description: string;
            default: true;
        };
        showWarning: {
            type: import("../../utils/types").OptionType.BOOLEAN;
            description: string;
            default: true;
        };
        hideTimestamps: {
            type: import("../../utils/types").OptionType.BOOLEAN;
            description: string;
            default: false;
        };
        hideBlockedUsers: {
            type: import("../../utils/types").OptionType.BOOLEAN;
            description: string;
            default: true;
        };
        buttons: {
            type: import("../../utils/types").OptionType.COMPONENT;
            component: () => import("react").JSX.Element;
        };
    }, {
        lastReviewId?: number;
        reviewsDropdownState?: boolean;
    }>;
    contextMenus: {
        "guild-header-popout": NavContextMenuPatchCallback;
        "guild-context": NavContextMenuPatchCallback;
        "user-context": NavContextMenuPatchCallback;
        "user-profile-actions": NavContextMenuPatchCallback;
        "user-profile-overflow-menu": NavContextMenuPatchCallback;
    };
    flux: {
        CONNECTION_OPEN: typeof initAuth;
    };
    start(): Promise<void>;
    renderProfileCollection: {
        priority: number;
        render: ({ user, isSideBar }: {
            user: User;
            isSideBar?: boolean;
        }) => import("react").JSX.Element;
    };
} & Record<PropertyKey, any> & import("../../utils/types").Plugin;
export default _default;
