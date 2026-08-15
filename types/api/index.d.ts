import * as $AudioPlayer from "./AudioPlayer";
import * as $Badges from "./Badges";
import * as $ChatButtons from "./ChatButtons";
import * as $Commands from "./Commands";
import * as $ContextMenu from "./ContextMenu";
import * as $DataStore from "./DataStore";
import * as $GifPickerContextMenu from "./GifPickerContextMenu";
import * as $HeaderBar from "./HeaderBar";
import * as $MemberListDecorators from "./MemberListDecorators";
import * as $MessageAccessories from "./MessageAccessories";
import * as $MessageDecorations from "./MessageDecorations";
import * as $MessageEventsAPI from "./MessageEvents";
import * as $MessagePopover from "./MessagePopover";
import * as $MessageUpdater from "./MessageUpdater";
import * as $NicknameIcons from "./NicknameIcons";
import * as $Notices from "./Notices";
import * as $Notifications from "./Notifications";
import * as $UserArea from "./UserArea";
export * as PluginManager from "./PluginManager";
import * as $ProfileCollections from "./ProfileCollections";
import * as $ProfileSections from "./ProfileSections";
import * as $ServerList from "./ServerList";
import * as $Settings from "./Settings";
import * as $Styles from "./Styles";
import * as $Themes from "./Themes";
import * as $UserSettings from "./UserSettings";
/**
 * An API allowing you to listen to Message Clicks or run your own logic
 * before a message is sent.
 *
 * If your plugin uses this, you must add MessageEventsAPI to its dependencies.
 */
export declare const MessageEvents: typeof $MessageEventsAPI;
/**
 * An API allowing you to create custom notices
 * (snackbars on the top, like the Update prompt).
 */
export declare const Notices: typeof $Notices;
/**
 * An API allowing you to register custom commands.
 */
export declare const Commands: typeof $Commands;
/**
 * A wrapper around IndexedDB. This can store arbitrarily
 * large data and supports a lot of datatypes (Blob, Map, ...).
 * For a full list, see the mdn link below.
 *
 * This should always be preferred over the Settings API if possible, as
 * localstorage has very strict size restrictions and blocks the event loop.
 *
 * Make sure your keys are unique (tip: prefix them with ur plugin name)
 * and please clean up no longer needed entries.
 *
 * This is actually just idb-keyval, so if you're familiar with that, you're golden!
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm#supported_types}
 */
export declare const DataStore: typeof $DataStore;
/**
 * An API allowing you to add custom components as message accessories.
 */
export declare const MessageAccessories: typeof $MessageAccessories;
/**
 * An API allowing you to add custom buttons in the message popover.
 */
export declare const MessagePopover: typeof $MessagePopover;
/**
 * An API allowing you to add badges to user profiles.
 */
export declare const Badges: typeof $Badges;
/**
 * An API allowing you to add custom elements to the server list.
 */
export declare const ServerList: typeof $ServerList;
/**
 * An API allowing you to add components as message accessories.
 */
export declare const MessageDecorations: typeof $MessageDecorations;
/**
 * An API allowing you to add components to member list users, in both DM's and servers.
 */
export declare const MemberListDecorators: typeof $MemberListDecorators;
/**
 * An API allowing you to persist data.
 */
export declare const Settings: typeof $Settings;
/**
 * An API allowing you to dynamically load styles.
 * a
 */
export declare const Styles: typeof $Styles;
/**
 * An API allowing you to display notifications.
 */
export declare const Notifications: typeof $Notifications;
/**
 * An api allowing you to patch and add/remove items to/from context menus.
 */
export declare const ContextMenu: typeof $ContextMenu;
/**
 * An API allowing you to add buttons to the chat input.
 */
export declare const ChatButtons: typeof $ChatButtons;
/**
 * An API allowing you to add buttons to the header bar or channel toolbar.
 */
export declare const HeaderBar: typeof $HeaderBar;
/**
 * An API allowing you to update and re-render messages.
 */
export declare const MessageUpdater: typeof $MessageUpdater;
/**
 * An API allowing you to get an user setting.
 */
export declare const UserSettings: typeof $UserSettings;
/**
 * Don't use this
 */
export declare const Themes: typeof $Themes;
/**
 * An API allowing you to add icons to the nickname, in profiles.
 */
export declare const NicknameIcons: typeof $NicknameIcons;
/**
 * An API allowing you to play internal Discord audio files or external audio URLs/URIs.
 */
export declare const AudioPlayer: typeof $AudioPlayer;
/**
 * An API allowing you to add buttons to the user area panel.
 */
export declare const UserArea: typeof $UserArea;
/**
 * Just used to identify if user is on Kernixcord as Vencord doesn't have this.
 */
export declare const isKernixcord = true;
/**
 * An API allowing you to add other collections where discords game collection is.
 */
export declare const ProfileCollections: typeof $ProfileCollections;
/**
 * An API allowing you to add sections near the 'Member Since' area of user profile panels.
 */
export declare const ProfileSections: typeof $ProfileSections;
/**
 * An API allowing plugins to add items to the GIF picker right-click context menu
 * without conflicting with each other.
 */
export declare const GifPickerContextMenu: typeof $GifPickerContextMenu;
