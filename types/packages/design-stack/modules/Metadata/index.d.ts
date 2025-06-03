/**
 * @typedef {Object} MetadataProps
 * @property {React.ReactNode} icon? - A custom React node representing an icon or image to be displayed prior the description.
 * @property {string} id? - Prop to add unique id attribute to root of the component.
 * @property {string} metaDescription? - The description or text content associated with the metadata.
 * @property {string} metaTitle? - The title of the wrapper span tag
 * @property {string} textColorClass? - A custom CSS class name to style the color of the metadata.
 */
import React from "react";
/**
 * @type {React.FC<MetadataProps>}
 */
declare const Metadata: {
    ({ icon, any, id, any, metaDescription, any, metaTitle, any, textColorClass, any, }: any): React.ReactElement;
    propTypes: {
        /** A custom React node representing an icon or image to be displayed prior the description. */
        icon: any;
        /** Prop to add unique id attribute to root of the component. */
        id: any;
        /** The description or text content associated with the metadata. */
        metaDescription: any;
        /** The title of the wrapper span tag */
        metaTitle: any;
        /** A custom CSS class name to style the color of the metadata. */
        textColorClass: any;
    };
};
/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-metadata--primary
 * @zeroHeight
 * @end
 */
export default Metadata;
