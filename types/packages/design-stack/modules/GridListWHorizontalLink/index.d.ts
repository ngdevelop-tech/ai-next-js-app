/**
 * Represents a grid list item with optional image, title, subtitle, tag, and footer,
 * often used to display items in a list or grid format where the entire item acts as a link.
 *
 * @typedef {Object} GridListWHorizontalLinkProps
 * @property {string} [ariaLabel='Grid list'] - Provides an accessible label for the component, describing its purpose. Defaults to 'Grid list'.
 * @property {React.ReactNode} [gridListFooter=null] - Optional content displayed at the bottom of the grid list item. If provided, the layout adjusts to accommodate the footer.
 * @property {React.ReactNode} [gridTag=null] - Optional tag element displayed next to the title, often used for status indicators or categorization.
 * @property {string} [id=null] - Optional unique identifier for the root element of the component.
 * @property {React.ReactNode} [image=null] - Optional image or icon element displayed within the grid list item. Its position (left or right) is controlled by `isImageOnRight`.
 * @property {boolean} [isImageOnRight=false] - Determines the position of the image. If `true`, the image is displayed on the right side; otherwise, it's on the left. Defaults to `false`.
 * @property {(event: React.MouseEvent<HTMLButtonElement>) => void} [onClick] - Callback function executed when the grid list item (or the button overlay if no footer is present) is clicked. Receives the click event as an argument.
 * @property {string | React.ReactNode} [subTitle=null] - The secondary text or content displayed below the title. Can be a simple string or a complex React node. If it's a string and `gridListFooter` is present, it clamps to 2 lines; otherwise, it truncates.
 * @property {string} [title=''] - The primary heading or title for the grid list item. Defaults to an empty string.
 * @property {string} [wrapperClassName=''] - Optional CSS class name(s) to apply to the main container `div` for custom styling. Defaults to an empty string.
 */
import React from "react";
/**
 * @type {React.FC<GridListWHorizontalLinkProps>}
 */
declare const GridListWHorizontalLink: {
    ({ ariaLabel, any, gridListFooter, any, gridTag, any, id, any, image, any, isImageOnRight, any, onClick, any }: {
        ariaLabel?: string;
        any: any;
        gridListFooter?: any;
        gridTag?: any;
        id?: any;
        image?: any;
        isImageOnRight?: boolean;
        onClick?: any;
    }): React.ReactElement;
    propTypes: {
        /** Provides an accessible label for the component, describing its purpose. */
        ariaLabel: any;
        /** Optional content displayed at the bottom of the grid list item. If provided, the layout adjusts. */
        gridListFooter: any;
        /** Optional tag element displayed next to the title (e.g., for status). */
        gridTag: any;
        /** Optional unique identifier for the root element. */
        id: any;
        /** Optional image or icon element. Position controlled by `isImageOnRight`. */
        image: any;
        /** If `true`, displays the image on the right; otherwise, on the left. */
        isImageOnRight: any;
        /** Callback function executed on click. Receives the click event. */
        onClick: any;
        /** Secondary text or content below the title. Can be a string or React node. */
        subTitle: any;
        /** The primary heading or title for the item. */
        title: any;
        /** Optional CSS class name(s) for the main container `div`. */
        wrapperClassName: any;
    };
};
/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-gridlistwhorizontallink--primary
 * @zeroHeight https://zeroheight.com/023d5159d/p/642c17-grid-lists/b/4635b4
 * @end
 */
export default GridListWHorizontalLink;
