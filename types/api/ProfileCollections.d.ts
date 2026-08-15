import { User } from "@vencord/discord-types";
import type { ReactNode } from "react";
export type ProfileCollectionFactory = (props: {
    user: User;
    isSideBar: boolean;
}) => ReactNode | Promise<ReactNode> | null;
export interface ProfileCollectionData {
    render: ProfileCollectionFactory;
    priority: number;
}
/**
 * Adds a collection to the user profile panel.
 *
 * @param id - Unique identifier for the collection (e.g., "my-plugin-profile-collection")
 * @param render - Function that returns the collection JSX. Receives the full profile props object.
 * @param priority - Higher values appear first. Default: 0
 *
 * @example
 * addProfileCollection("my-collection", (props) => (
 *     <div>Custom content for {props.user.id}</div>
 * ));
 */
export declare function addProfileCollection(id: string, render: ProfileCollectionFactory, priority?: number): void;
/**
 * Removes a collection from the user profile panel.
 *
 * @param id - The identifier used when adding the collection
 */
export declare function removeProfileCollection(id: string): void;
/** @internal Injected by ProfileCollectionAPI patch (do NOT call directly) */
export declare function renderProfileCollections(props: any): import("react").JSX.Element;
