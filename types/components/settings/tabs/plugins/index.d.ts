import "./styles.css";
import { Logger } from "../../../../utils/Logger";
import { JSX } from "react";
export declare const cl: (...args: import("../../../../utils/css").ClassNameFactoryArg[]) => string;
export declare const logger: Logger;
export declare const ExcludedReasons: Record<"web" | "discordDesktop" | "vesktop" | "kernixos" | "desktop" | "dev", string>;
export default function PluginSettings(): JSX.Element;
export declare function PluginDependencyList({ deps }: {
    deps: string[];
}): JSX.Element;
