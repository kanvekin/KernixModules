import type { UserstyleHeader } from "usercss-meta";
import type { UserThemeHeader } from "./bd";
export type ThemeHeader = {
    type: "other";
    header: UserThemeHeader;
} | {
    type: "usercss";
    header: UserstyleHeader;
};
