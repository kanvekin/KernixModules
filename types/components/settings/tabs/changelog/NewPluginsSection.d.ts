interface NewPluginsSectionProps {
    newPlugins: string[];
    onPluginToggle?: (pluginName: string, enabled: boolean) => void;
}
export declare function NewPluginsSection({ newPlugins, onPluginToggle, }: NewPluginsSectionProps): import("react").JSX.Element | null;
interface NewPluginsCompactProps {
    newPlugins: string[];
    maxDisplay?: number;
}
export declare function NewPluginsCompact({ newPlugins, maxDisplay, }: NewPluginsCompactProps): import("react").JSX.Element | null;
export {};
