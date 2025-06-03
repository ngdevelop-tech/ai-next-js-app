/**
 * @typedef {Object} MediaPlayerSeekbarProps
 * @property {any} exceptions? - An array of objects representing exceptions/marker data, each containing an id, startTime (in seconds), and type ('warning' or 'error').
 * @property {string} id?
 * @property {number} startTime?
 * @property {any} type?
 */
import React from "react";
/**
 * @type {React.ForwardRefExoticComponent<MediaPlayerSeekbarProps & React.RefAttributes<HTMLDivElement>>}
 */
declare const MediaPlayerSeekbar: React.ForwardRefExoticComponent<React.RefAttributes<unknown>>;
/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-mediaplayer--primary
 * @zeroHeight https://zeroheight.com/023d5159d/p/96389e-media-player/b/4635b4
 * @end
 */
export default MediaPlayerSeekbar;
