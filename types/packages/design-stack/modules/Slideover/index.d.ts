/**
 * @typedef {Object} ResizableWrapperProps
 * @property {Array<number>} [maxConstraints] - Maximum width and height constraints for resizing. Example: `[800, Infinity]`
 * @property {Array<number>} [minConstraints] - Minimum width and height constraints for resizing. Example: `[300, Infinity]`
 * @property {function(Event, Object): void} [onResize] - Callback function fired when the component is resized. Receives the event and data object with size information.
 * @property {function(Event, Object): void} [onResizeStart] - Callback fired when resize starts. Receives the event and data object.
 * @property {function(Event, Object): void} [onResizeStop] - Callback fired when resize stops. Receives the event and data object with final size information.
 * @property {number} width - The initial width of the resizable component. This is required when `isFluid` is true.
 */
/**
 * @typedef {Object} SlideoverProps
 * @property {boolean} [backgroundOverlay=true] - Toggles if the semi-transparent background overlay is visible. When true, clicking the overlay can trigger the `onOverlayClick` callback.
 * @property {React.ReactNode} [children=null] - The content to be displayed within the slideover panel.
 * @property {string} [childrenWrapperClassName=''] - Custom CSS class name(s) to apply to the direct container of the `children`.
 * @property {boolean} [closeButtonOutside=false] - If true, renders the close button outside the slideover panel for easier access, especially on smaller viewports.
 * @property {string} [id=null] - Unique identifier for the root element of the slideover. If provided, it's used to generate `aria-labelledby` for the slideover panel.
 * @property {React.RefObject<HTMLElement>} [initialFocusRef=null] - A ref pointing to the element that should receive focus when the slideover opens. Helps manage focus for accessibility.
 * @property {boolean} [isFluid=false] - If true, the slideover becomes resizable horizontally. Requires `resizableWrapperProps` with at least `width` defined.
 * @property {function(): void} [onCloseWithOutsideButton=null] - Callback fired when the outside close button is clicked.
 * @property {function(): void} [onEscPress=null] - Callback fired when the Escape key is pressed while the slideover is open.
 * @property {function(): void} [onOverlayClick=null] - Callback fired when the background overlay is clicked.
 * @property {ResizableWrapperProps} [resizableWrapperProps={}] - Configuration for the resizable wrapper when `isFluid` is true.
 * @property {boolean} [show=false] - Controls the visibility of the slideover. When true, the slideover is displayed.
 * @property {string} [size='LG'] - Predefined size of the slideover. Example values: `'SM'`, `'MD'`, `'LG'`.
 * @property {string} [topMarginElementId=''] - ID of the element used to calculate the top margin adjustment for the slideover.
 * @property {string} [wrapperClassName=''] - Custom CSS class name(s) to apply to the wrapper of the slideover and overlay.
 */
import React from "react";
/**
 * @type {React.FC<SlideoverProps>}
 */
declare const Slideover: {
    ({ id, any, backgroundOverlay, any, children, any, childrenWrapperClassName, any, closeButtonOutside, any, initialFocusRef, any, isFluid, any, onCloseWithOutsideButton, any, onEscPress, any, onOverlayClick, any, show, any, size, any, topMarginElementId, any, wrapperClassName, any, resizableWrapperProps, any, }: any): React.ReactElement;
    propTypes: {
        /** Toggles if the semi-transparent background overlay is visible. When true, clicking the overlay can trigger the `onOverlayClick` callback. */
        backgroundOverlay: any;
        /** The content to be displayed within the slideover panel. */
        children: any;
        /** Custom CSS class name(s) to apply to the direct container of the `children`. */
        childrenWrapperClassName: any;
        /** If true, renders the close button outside the slideover panel for easier access, especially on smaller viewports. */
        closeButtonOutside: any;
        /** Unique identifier for the root element of the slideover. If provided, it's used to generate `aria-labelledby` for the slideover panel. */
        id: any;
        /** A ref pointing to the element that should receive focus when the slideover opens. Helps manage focus for accessibility. */
        initialFocusRef: any;
        /** If true, the slideover becomes resizable horizontally. Requires `resizableWrapperProps` with at least `width` defined. */
        isFluid: any;
        /** Callback fired when the outside close button is clicked. */
        onCloseWithOutsideButton: any;
        /** Callback fired when the Escape key is pressed while the slideover is open. */
        onEscPress: any;
        /** Callback fired when the background overlay is clicked. */
        onOverlayClick: any;
        /** Configuration for the resizable wrapper when `isFluid` is true. */
        resizableWrapperProps: any;
        /** Controls the visibility of the slideover. When true, the slideover is displayed. */
        show: any;
        /** Predefined size of the slideover. Example values: `'SM'`, `'MD'`, `'LG'`. */
        size: any;
        /** ID of the element used to calculate the top margin adjustment for the slideover. */
        topMarginElementId: any;
        /** Custom CSS class name(s) to apply to the wrapper of the slideover and overlay. */
        wrapperClassName: any;
    };
};
export default Slideover;
/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-slideover--resizeable-example
 * @zeroHeight https://zeroheight.com/023d5159d/p/544a29-slide-over/b/051181
 * @end
 */
