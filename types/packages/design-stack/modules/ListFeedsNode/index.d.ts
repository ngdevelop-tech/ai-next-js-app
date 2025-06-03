/**
 * @typedef {Object} ListFeedsProps
 * @property {React.ReactNode} [customDragHandle] - Custom React node to replace the default drag handle icon. Only relevant when `isDraggable` is true.
 * @property {React.ReactNode} [descriptionNode] - Node containing the description content to be displayed within the component.
 * @property {string} [dragHandleClassName] - Additional CSS class name(s) for the drag handle container. Only relevant when `isDraggable` is true.
 * @property {Record<string, any>} [dragHandleProps] - Props to be spread onto the drag handle element. Useful for integrating with drag-and-drop libraries (e.g., dnd-kit). Only relevant when `isDraggable` is true.
 * @property {React.ReactNode} feedIcon - A custom React node representing an icon or image to be displayed as the feed icon.
 * @property {'grey' | 'blue' | 'green' | 'orange' | 'red'} [feedIconColor='grey'] - Specifies the color theme for the feed icon.
 * @property {'sm' | 'md' | 'lg'} [feedIconContainerSize='lg'] - Specifies the size of the container surrounding the feed icon.
 * @property {'sm' | 'md' | 'lg'} [feedIconSize='md'] - Specifies the size of the feed icon itself.
 * @property {'dark' | 'light'} [feedIconVariant='dark'] - Specifies the visual variant of the feed icon (e.g., background style).
 * @property {React.ReactNode} [feedNumber] - A React node (typically a number) displayed before the feed icon. If `isDraggable` is true, this area becomes the hover target for the drag handle.
 * @property {React.ReactNode} [footerNode] - Node containing the footer content, often displayed on hover.
 * @property {React.ReactNode} [headerNode] - Node containing the header content displayed above the description.
 * @property {'default' | 'sm' | 'md' | 'lg'} [iconDescriptionGap='default'] - Specifies the horizontal gap between the feed icon section and the description/header/footer section.
 * @property {string} [id] - Optional unique identifier for the root element. If not provided and `isDraggable` is true, a unique ID will be generated.
 * @property {boolean} [isDraggable=false] - If true, enables drag-and-drop interactions, showing a drag handle on hover over the `feedNumber` area.
 * @property {boolean} [isFeedIconBorder=false] - Determines whether to show a border around the feed icon. Primarily effective when `feedIconVariant` is "light".
 * @property {boolean} [showConnector=true] - Determines whether to display vertical connector lines below the feed icon, visually linking it to subsequent feeds.
 * @property {'default' | 'sm' | 'md' | 'lg'} [spacing='default'] - Specifies the vertical margin below the feed item, controlling spacing between consecutive feeds.
 * @property {string} [wrapperClassName] - Additional CSS class name(s) to apply to the root `div` element of the component.
 */
import React from "react";
/**
 * `ListFeedsNode` is a component designed to display items in a feed-like structure,
 * often used for timelines, step-by-step guides, or activity logs. It supports icons,
 * numbering, descriptions, headers, footers, connector lines, and optional drag-and-drop functionality.
 *
 * @type {React.ForwardRefExoticComponent<ListFeedsProps & React.RefAttributes<HTMLDivElement>>}
 */
declare const ListFeeds: React.ForwardRefExoticComponent<React.RefAttributes<unknown>>;
/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-listfeedsnode--primary
 * @zeroHeight https://zeroheight.com/023d5159d/p/95afef-feeds/b/4635b4
 * @end
 */
export default ListFeeds;
