/**
 * Represents the properties for the MediaPlayer component.
 * @typedef {Object} MediaPlayerProps
 * @property {React.ReactNode} [children] - Child elements, typically controls, to be rendered within the media player's control panel. These children will receive a `ref` to the `ReactPlayer` instance.
 * @property {boolean} [controlPanelAtBottom=true] - If true, positions the control panel fixed at the bottom of the viewport. Otherwise, it renders below the player.
 * @property {string} [controlPanelWrapperClassName=''] - Additional CSS classes to apply to the control panel wrapper div.
 * @property {string} [id] - Optional ID attribute for the main wrapper div of the media player.
 * @property {(player: any) => void} [onFirstReady] - Callback function invoked when the player is ready for the first time. Receives the internal player instance.
 * @property {() => void} [onPauseCallback] - Callback function invoked when the media playback is paused.
 * @property {() => void} [onPlayCallback] - Callback function invoked when the media playback starts or resumes.
 * @property {() => void} [onVideoError] - Callback function invoked if there's an error loading or playing the media.
 * @property {() => void} [timeUpdateCallBack] - Callback function invoked repeatedly as the playback time progresses.
 * @property {string} [url=''] - The URL of the media to play. Supports URL fragments like `#t=startTime,endTime` to specify playback range in seconds (e.g., `video.mp4#t=10,30`).
 * @property {string} [wrapperClassName=''] - Additional CSS classes to apply to the main wrapper div containing the ReactPlayer instance.
 */
import React from "react";
/**
 * MediaPlayer component provides a customizable video/audio player using ReactPlayer.
 * It includes features like buffering indication, custom start/end times via URL fragments,
 * and allows embedding custom controls as children.
 *
 * @component
 * @example
 * ```jsx
 * <MediaPlayer url="video.mp4#t=5,25" wrapperClassName="custom-player">
 *   <CustomPlayButton />
 *   <CustomSeekBar />
 *   <CustomVolumeControl />
 * </MediaPlayer>
 * ```
 * @see {@link https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-mediaplayer--primary} Storybook
 * @see {@link https://zeroheight.com/023d5159d/p/96389e-media-player/b/4635b4} Zeroheight
 * @type {React.ForwardRefExoticComponent<MediaPlayerProps & React.RefAttributes<import('react-player').default>>}
 */
declare const MediaPlayer: React.ForwardRefExoticComponent<React.RefAttributes<unknown>>;
/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-mediaplayer--primary
 * @zeroHeight https://zeroheight.com/023d5159d/p/96389e-media-player/b/4635b4
 * @end
 */
export default MediaPlayer;
