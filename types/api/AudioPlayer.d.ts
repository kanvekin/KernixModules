export type AudioProcessor = (data: PreprocessAudioData) => void;
export type AudioCallback = (() => void);
export type AudioErrorHandler = ((error: Error) => void);
export declare const audioProcessorFunctions: Record<string, AudioProcessor>;
export declare enum AudioType {
    /** An external URL that follows the Content Security Policy. */
    URL = "url",
    /** A base64-encoded data URI. */
    DATA = "data-uri",
    /** A Blob URI. */
    BLOB = "blob",
    /** A file path. */
    PATH = "file-path",
    /** An internal Discord audio filename (e.g. "discodo"). */
    DISCORD = "discord",
    /** Any other unrecognized audio type. */
    OTHER = "other"
}
export interface PreprocessAudioData {
    /** The original audio string passed to the player. */
    audio: string;
    /** The read-only type of audio of the original audio string. */
    readonly type: AudioType;
    /** The volume of the original audio between 0 and 100. */
    volume: number;
    /** The playback speed of the original audio between 0.0625 and 16. */
    speed: number;
}
export interface AudioPlayerInternal {
    preprocessDataOriginal: PreprocessAudioData;
    preprocessDataPrevious: PreprocessAudioData | null;
    preprocessDataCurrent: PreprocessAudioData;
    audio: string;
    _audio: null | Promise<HTMLAudioElement>;
    _volume: number;
    _speed: number;
    outputChannel: string;
    type: AudioType;
    preload: boolean;
    persistent: boolean;
    onEnded?: AudioCallback;
    onError?: AudioErrorHandler;
    processAudio: () => void;
    ensureAudio(): Promise<HTMLAudioElement>;
    destroyAudio(): void;
    loop(): void;
    play(): void;
    pause(): void;
    stop(restart?: boolean): void;
}
export interface AudioPlayerInterface {
    /** The internal Discord audio filename (e.g. "discodo"), a data URI, or an external URL that follows the CSP. */
    audio: string;
    /** The read-only type of audio determined during processing. */
    readonly type: AudioType;
    /** The duration of the audio in seconds, or null if not yet loaded. */
    readonly duration: Promise<number> | null;
    /** The current time of the audio in seconds, or null if not yet loaded. */
    time: Promise<number> | null;
    /** The paused state of the audio, or null if not yet loaded. */
    paused: Promise<boolean> | null;
    /** The muted state of the audio, or null if not yet loaded. */
    muted: Promise<boolean> | null;
    /** The volume of the audio between 0 and 100. */
    volume: number;
    /** The playback speed of the audio between 0.0625 and 16. */
    speed: number;
    /** Whether to load the audio immediately. If persistent is false, this will only apply until the first playback. */
    preload: boolean;
    /** Whether the audio element is persistent and not recreated for every playback. */
    persistent: boolean;
    /** Preloads the audio before playback. Automatically called when persistent is true. */
    load(): void;
    /** Sets the audio to loop until paused or stopped. */
    loop(): void;
    /** Plays the audio. */
    play(): void;
    /** Pauses the audio. */
    pause(): void;
    /** Stops the audio. */
    stop(): void;
    /** Plays the audio from the beginning. */
    restart(): void;
    /** Seeks to a specific time in seconds. */
    seek(time: number): void;
    /** Mutes the audio. */
    mute(): void;
    /** Unmutes the audio. */
    unmute(): void;
    /** Deletes the audio element. Necessary if persistent is true. */
    delete(): void;
}
export interface AudioPlayerOptions {
    /** The volume of the audio, between 0 and 100, defaulting to 100. */
    volume?: number;
    /** The playback speed of the audio, between 0.0625 and 16, defaulting to 1. */
    speed?: number;
    /** Whether to preload the audio as soon as the player is created. */
    preload?: boolean;
    /** Whether the audio element is persistent and not recreated for every playback. If persistent, you must call delete() to free the memory. Defaults to false. */
    persistent?: boolean;
    /** An optional callback that is called every time the audio finishes playing. */
    onEnded?: AudioCallback;
    /** An optional error handler that is called when an error occurs during audio playback. */
    onError?: AudioErrorHandler;
}
/**
 * Creates an audio player.
 * @param audio The internal Discord audio filename (e.g. "discodo"), a data URI, or an external URL that follows the CSP.
 * @param options Additional options for the audio player.
 * @param options.volume The volume of the audio, between 0 and 100, defaulting to 100.
 * @param options.speed The playback speed of the audio, between 0.0625 and 16, defaulting to 1.
 * @param options.preload Whether to load the audio immediately. If persistent is false, this will only apply until the first playback.
 * @param options.persistent Whether the audio element is persistent and not recreated for every playback. If persistent, you must call delete() to free the memory. Defaults to false.
 * @param options.onEnded An optional callback that is called every time the audio finishes playing.
 * @param options.onError An optional error handler that is passed an Error object when an error occurs during audio playback.
 * @return The created audio player.
 */
export declare function createAudioPlayer(audio: string, options?: AudioPlayerOptions): AudioPlayerInterface;
/**
 * Plays an audio instantly and returns the player.
 * @param audio The internal Discord audio filename (e.g. "discodo"), a data URI, or an external URL that follows the CSP.
 * @param options Additional options for the audio player.
 * @param options.volume The volume of the audio, between 0 and 100, defaulting to 100.
 * @param options.speed The playback speed of the audio, between 0.0625 and 16, defaulting to 1.
 * @param options.preload Whether to load the audio immediately. If persistent is false, this will only apply until the first playback.
 * @param options.persistent Whether the audio element is persistent and not recreated for every playback. If persistent, you must call delete() to free the memory. Defaults to false.
 * @param options.onEnded An optional callback that is called every time the audio finishes playing.
 * @param options.onError An optional error handler that is passed an Error object when an error occurs during audio playback.
 * @return The created audio player.
 */
export declare function playAudio(audio: string, options?: AudioPlayerOptions): AudioPlayerInterface;
/**
 * Identifies the type of audio based on its string.
 * @param audio The audio string to identify.
 * @returns The identified AudioType.
 */
export declare function identifyAudioType(audio: string): AudioType;
/**
 * Adds a function to process an audio before it is played.
 * @param key A unique identifier for this audio processor. Plugin name is recommended.
 * @param processor A function that takes a data object with audio, volume (0-100), and type (AudioType) attributes, and modifies the audio and volume in place.
 */
export declare function addAudioProcessor(key: string, processor: AudioProcessor): void;
/**
 * Removes an audio processor by its key.
 * @param key The unique identifier of the audio processor to remove.
 */
export declare function removeAudioProcessor(key: string): void;
/** Returns an array of all internal Discord audio filenames. */
export declare function defaultAudioNames(): string[];
