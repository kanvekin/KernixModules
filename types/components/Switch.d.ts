import "./Switch.css";
import type { Ref } from "react";
export interface SwitchProps {
    checked: boolean;
    onChange: (checked: boolean) => void;
    disabled?: boolean;
    id?: string;
    hasIcon?: boolean;
    innerRef?: Ref<HTMLInputElement>;
    "aria-describedby"?: string;
    "aria-labelledby"?: string;
}
export declare function Switch({ checked, onChange, disabled, id, hasIcon, innerRef, ...ariaProps }: SwitchProps): import("react").JSX.Element;
