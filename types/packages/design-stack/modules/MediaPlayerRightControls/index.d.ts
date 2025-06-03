/**
 * @typedef {Object} MediaPlayerRightControlsProps
 * @property {React.ReactNode} customSetting? - Custom React node to render additional controls within the right controls area.
 * @property {string} id? - Prop to add unique id attribute to root of the component.
 * @property {(event: React.MouseEvent<any>) => void} onDownloadClick? - Callback function invoked when the download option is clicked.
 * @property {(event: React.MouseEvent<any>) => void} onFullScreen? - Callback function triggered when the full-screen option is clicked.
 * @property {(event: React.MouseEvent<any>) => void} onPlaybackSpeedClick? - Callback function called with the selected playback speed when a speed option is clicked.
 * @property {boolean} showAdditionalSettings? - Boolean to determine if additional settings options should be shown.
 * @property {boolean} showFullScreenOption? - Boolean indicating whether the full-screen option should be displayed.
 * @property {boolean} showSpeedOption? - Boolean determining whether the playback speed options should be visible.
 * @property {string} wrapperClassName? - Additional CSS class(es) to customize the styling of the right controls area.
 */
import React from "react";
/**
 * @type {React.ForwardRefExoticComponent<MediaPlayerRightControlsProps & React.RefAttributes<HTMLDivElement>>}
 */
declare const MediaPlayerRightControls: React.ForwardRefExoticComponent<React.RefAttributes<unknown>>;
/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-mediaplayer--primary
 * @zeroHeight https://zeroheight.com/023d5159d/p/96389e-media-player/b/4635b4
 * @end
 */
export default MediaPlayerRightControls;
