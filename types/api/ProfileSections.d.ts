import type { ReactNode } from "react";
export type ProfileSectionFactory = (props: {
    userId: string;
    isSideBar: boolean;
}) => ReactNode | Promise<ReactNode> | null;
export interface ProfileSectionData {
    render: ProfileSectionFactory;
    priority: number;
}
/**
 * Adds a section to the user profile panel near the 'Member Since' area.
 *
 * @param id       - Unique identifier for the section (e.g., "my-plugin-profile-section")
 * @param render   - Function that returns the section JSX.
 *                   Receives `{ userId, isSideBar }` so you can style accordingly.
 * @param priority - Higher values appear first. Default: 0
 *
 * @example
 * addProfileSection("my-section", ({ userId, isSideBar }) => (
 *     <div>Custom content for {userId}</div>
 * ));
 */
export declare function addProfileSection(id: string, render: ProfileSectionFactory, priority?: number): void;
/**
 * Removes a section from the user profile panel.
 *
 * @param id - The identifier used when adding the section
 */
export declare function removeProfileSection(id: string): void;
/** @internal Injected by ProfileSectionsAPI patch (do NOT call directly) */
export declare function renderProfileSections(props: {
    userId: string;
    isSideBar: boolean;
}): import("react").JSX.Element;
