interface Props {
    label: string;
    name: string;
    options: {
        name: string;
        label: string;
        value: string;
    }[];
    default: string;
    themeSettings: Record<string, string>;
}
export declare function SettingSelectComponent({ label, name, options, default: def, themeSettings }: Props): import("react").JSX.Element;
export {};
