/**
 * Represents a grid list item primarily featuring an image, along with an optional label and subtext.
 * It can be interactive (clickable).
 *
 * @typedef {Object} GridListWImageProps
 * @property {string} [id=null] - Optional unique identifier for the root `div` element.
 * @property {string} [image=''] - The source URL for the image to be displayed. Defaults to an empty string.
 * @property {string} [imageClassName=''] - Optional CSS class name(s) to apply directly to the `img` element for custom styling. Defaults to an empty string.
 * @property {string} [imageWrapperClassName=''] - Optional CSS class name(s) to apply to the `div` element that wraps the image, useful for controlling aspect ratio or container styles. Defaults to an empty string.
 * @property {string} [label=''] - The main text label displayed below the image. Defaults to an empty string.
 * @property {(event: React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>) => void} [onClick=null] - Optional callback function executed when the component is clicked or activated via keyboard (Enter or Space). If provided, the component becomes interactive (focusable, clickable). Defaults to `null`.
 * @property {string} [subText=''] - Additional descriptive text displayed below the main label. Defaults to an empty string.
 * @property {string} [wrapperClassName=''] - Optional CSS class name(s) to apply to the root `div` element for overall custom styling. Defaults to an empty string.
 */
import React from "react";
/**
 * A component that displays an item in a grid list format, primarily featuring an image.
 * It supports an optional label, subtext, and click interaction.
 * The component forwards refs to the root `div` element.
 * @type {React.ForwardRefExoticComponent<GridListWImageProps & React.RefAttributes<HTMLDivElement>>}
 */
declare const GridListWImage: React.ForwardRefExoticComponent<React.RefAttributes<unknown>>;
/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-gridlistwimage--primary
 * @zeroHeight https://zeroheight.com/023d5159d/p/642c17-grid-lists/b/4635b4
 * @end
 */
export default GridListWImage;
