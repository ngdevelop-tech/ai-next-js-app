/**
 * @typedef {Object} MediaPlayerStatesProps
 * @property {string} id? - Prop to add unique id attribute to root of the component.
 * @property {(event: React.MouseEvent<any>) => void} onReloadClick? - Callback function triggered when the "Reload" button is clicked.
 * @property {any} variant? - Represents different states of the media player.
 * @property {string} wrapperClassName? - Additional CSS class(es) to customize the styling of the component.
 */
import React from "react";
/**
 * @type {React.FC<MediaPlayerStatesProps>}
 */
declare const MediaPlayerStates: {
    ({ id, any, onReloadClick, any }: {
        id?: any;
        any: any;
        onReloadClick?: any;
    }): React.ReactElement;
    propTypes: {
        /** Prop to add unique id attribute to root of the component. */
        id: any;
        /** Callback function triggered when the "Reload" button is clicked. */
        onReloadClick: any;
        /** Represents different states of the media player. */
        variant: any;
        /** Additional CSS class(es) to customize the styling of the component. */
        wrapperClassName: any;
    };
};
/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-mediaplayer--primary
 * @zeroHeight https://zeroheight.com/023d5159d/p/96389e-media-player/b/4635b4
 * @end
 */
export default MediaPlayerStates;
