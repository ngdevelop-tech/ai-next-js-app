/**
 * @typedef {Object} ResizableWrapperProps
 * @property {React.ReactNode} [children] - The content to be rendered inside the resizable container.
 * @property {string} [className] - Additional CSS class names to apply to the resizable container.
 * @property {React.ReactElement | ((axis: 'n' | 's' | 'e' | 'w' | 'ne' | 'nw' | 'se' | 'sw') => React.ReactElement)} [handle] - A custom React element or a function returning a React element to be used as the resize handle. The function receives the handle's location ('n', 's', 'e', 'w', 'ne', 'nw', 'se', 'sw') as an argument. If not provided, default handles are used based on `resizeHandles`.
 * @property {number[]} [handleSize=[10, 10]] - The size `[width, height]` in pixels of the resize handles.
 * @property {number} [height=200] - The initial height of the resizable component in pixels.
 * @property {number[]} [maxConstraints=[Infinity, Infinity]] - The maximum dimensions `[width, height]` in pixels that the component can be resized to.
 * @property {number[]} [minConstraints=[0, 0]] - The minimum dimensions `[width, height]` in pixels that the component can be resized to.
 * @property {(event: React.SyntheticEvent, data: { size: { width: number, height: number } }) => void} [onResize] - Callback function invoked during the resize operation. Receives the event and an object containing the current size.
 * @property {(event: React.SyntheticEvent, data: { size: { width: number, height: number } }) => void} [onResizeStart] - Callback function invoked when the resize operation starts.
 * @property {(event: React.SyntheticEvent, data: { size: { width: number, height: number } }) => void} [onResizeStop] - Callback function invoked when the resize operation stops.
 * @property {Array<'s' | 'w' | 'e' | 'n' | 'sw' | 'nw' | 'se' | 'ne'>} [resizeHandles=['se']] - Specifies which resize handles should be visible. Defaults to `['se']`. Possible values are defined in `RESIZEABLE_DIRECTIONS`.
 * @property {number} [width=200] - The initial width of the resizable component in pixels.
 */
import React from "react";
/**
 * A wrapper component that makes its children resizable using handles.
 * It utilizes `react-resizable`'s `ResizableBox` component internally.
 *
 * @component
 * @example
 * ```jsx
 * <ResizableWrapper width={200} height={200} minConstraints={[100, 100]} maxConstraints={[500, 500]}>
 *   <div>Resizable Content</div>
 * </ResizableWrapper>
 * ```
 * @see https://github.com/react-grid-layout/react-resizable
 * @type {React.FC<ResizableWrapperProps>}
 */
declare const ResizableWrapper: {
    ({ children, any, className, any, handle, any, handleSize, any, height, any, maxConstraints, any, minConstraints, any, onResize, any, onResizeStart, any, onResizeStop, any, resizeHandles, any, width, any, }: any): React.ReactElement;
    propTypes: {
        /** The content to be rendered inside the resizable container. */
        children: any;
        /** Additional CSS class names to apply to the resizable container. */
        className: any;
        /** A custom React element or a function returning a React element to be used as the resize handle. The function receives the handle's location ('n', 's', 'e', 'w', 'ne', 'nw', 'se', 'sw') as an argument. */
        handle: any;
        /** The size `[width, height]` in pixels of the resize handles. */
        handleSize: any;
        /** The initial height of the resizable component in pixels. */
        height: any;
        /** The maximum dimensions `[width, height]` in pixels that the component can be resized to. */
        maxConstraints: any;
        /** The minimum dimensions `[width, height]` in pixels that the component can be resized to. */
        minConstraints: any;
        /** Callback function invoked during the resize operation. Receives the event and an object containing the current size. */
        onResize: any;
        /** Callback function invoked when the resize operation starts. */
        onResizeStart: any;
        /** Callback function invoked when the resize operation stops. */
        onResizeStop: any;
        /** Specifies which resize handles should be visible. Defaults to `['se']`. */
        resizeHandles: any;
        /** The initial width of the resizable component in pixels. */
        width: any;
    };
    displayName: string;
};
/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-resizable--primary
 * @zeroHeight
 * @end
 */
export default ResizableWrapper;
