import "./BaseText.css";
import type { Text as DiscordText } from "@vencord/discord-types";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
export declare const TextSizes: {
    readonly xxs: {
        readonly fontSize: "10px";
        readonly lineHeight: "1.2";
    };
    readonly xs: {
        readonly fontSize: "12px";
        readonly lineHeight: "1.33333";
    };
    readonly sm: {
        readonly fontSize: "14px";
        readonly lineHeight: "1.28571";
    };
    readonly md: {
        readonly fontSize: "16px";
        readonly lineHeight: "1.25";
    };
    readonly lg: {
        readonly fontSize: "20px";
        readonly lineHeight: "1.2";
    };
    readonly xl: {
        readonly fontSize: "24px";
        readonly lineHeight: "1.25";
    };
    readonly xxl: {
        readonly fontSize: "32px";
        readonly lineHeight: "1.25";
    };
};
export declare const TextWeights: {
    readonly thin: "100";
    readonly extralight: "200";
    readonly light: "300";
    readonly normal: "400";
    readonly medium: "500";
    readonly semibold: "600";
    readonly bold: "700";
    readonly extrabold: "800";
};
export declare const TextColors: {
    readonly "text-default": "var(--text-default)";
    readonly "text-muted": "var(--text-muted)";
    readonly "text-link": "var(--text-link)";
    readonly "text-danger": "var(--text-feedback-critical)";
    readonly "text-brand": "var(--text-brand)";
    readonly "text-strong": "var(--text-strong)";
    readonly "text-subtle": "var(--text-subtle)";
    readonly "text-invert": "var(--text-invert)";
    readonly "text-feedback-critical": "var(--text-feedback-critical)";
    readonly "text-feedback-info": "var(--text-feedback-info)";
    readonly "text-feedback-positive": "var(--text-feedback-positive)";
    readonly "text-feedback-warning": "var(--text-feedback-warning)";
    readonly "text-status-dnd": "var(--text-status-dnd)";
    readonly "text-status-idle": "var(--text-status-idle)";
    readonly "text-status-offline": "var(--text-status-offline)";
    readonly "text-status-online": "var(--text-status-online)";
    readonly "control-text-critical": "var(--control-text-critical-secondary-default)";
    readonly "control-text-primary": "var(--control-text-primary-default)";
};
export declare function generateTextCss(): string;
export type TextSize = keyof typeof TextSizes;
export type TextWeight = keyof typeof TextWeights;
export type TextColor = keyof typeof TextColors;
export type TextTag = "div" | "span" | "p" | `h${1 | 2 | 3 | 4 | 5 | 6}`;
export type BaseTextProps<Tag extends TextTag = "div"> = ComponentPropsWithoutRef<Tag> & {
    size?: TextSize;
    weight?: TextWeight;
    color?: TextColor;
    tag?: Tag;
    selectable?: boolean;
    lineClamp?: number;
    tabularNumbers?: boolean;
    defaultColor?: boolean;
};
export declare function BaseText<T extends TextTag = "div">(props: BaseTextProps<T>): ReactNode;
export declare const TextCompat: DiscordText;
