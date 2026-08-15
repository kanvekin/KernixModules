interface Props {
    label: string;
    name: string;
    default: number;
    min?: number;
    max?: number;
    step?: number;
    themeSettings: Record<string, string>;
}
export declare function SettingRangeComponent({ label, name, default: def, min, max, step, themeSettings }: Props): import("react").JSX.Element;
export {};
