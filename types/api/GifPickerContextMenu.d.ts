import type { ReactNode } from "react";
export type GifPickerContextMenuItemFactory = (instance: any, e: React.MouseEvent) => ReactNode | void;
/**
 * Register a context menu item factory for GIF picker items.
 * @param id      Unique ID, typically the plugin name.
 * @param render  Function that receives the GIF item and returns ReactNode(s) to inject.
 * @param priority Lower numbers appear first. Defaults to 0.
 */
export declare function addGifPickerContextMenuPatch(id: string, render: GifPickerContextMenuItemFactory, priority?: number): void;
/**
 * Remove a previously registered context menu item factory.
 * @param id Unique ID used when registering.
 */
export declare function removeGifPickerContextMenuPatch(id: string): void;
/** @internal Called by ExtraContextMenusAPI to render the merged context menu. */
export declare function _openGifPickerContextMenu(e: React.MouseEvent, instance: any): void;
