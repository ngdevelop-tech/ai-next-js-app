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
import { ResizableBox } from "react-resizable";
import PropTypes from "prop-types";

import { RESIZEABLE_DIRECTIONS } from "./constants/resizeable";
import useResizeable from "./useResizeable";

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
const ResizableWrapper = ({
  children = null,
  className = "",
  handle = null,
  handleSize = null,
  height = -1,
  maxConstraints = null,
  minConstraints = null,
  onResize = null,
  onResizeStart = null,
  onResizeStop = null,
  resizeHandles = null,
  width = null,
}) => {
  const { onResizeStartCallback, onResizeStopCallback, defaultHandleProps } =
    useResizeable(onResizeStop, onResizeStart, handle, resizeHandles);

  return (
    <ResizableBox
      className={className}
      width={width}
      height={height}
      handle={handle || defaultHandleProps}
      handleSize={handleSize}
      resizeHandles={resizeHandles}
      minConstraints={minConstraints}
      maxConstraints={maxConstraints}
      onResize={onResize}
      onResizeStart={onResizeStartCallback}
      onResizeStop={onResizeStopCallback}
    >
      {children}
    </ResizableBox>
  );
};

ResizableWrapper.propTypes = {
  /** The content to be rendered inside the resizable container. */
  children: PropTypes.node,
  /** Additional CSS class names to apply to the resizable container. */
  className: PropTypes.string,
  /** A custom React element or a function returning a React element to be used as the resize handle. The function receives the handle's location ('n', 's', 'e', 'w', 'ne', 'nw', 'se', 'sw') as an argument. */
  handle: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
  /** The size `[width, height]` in pixels of the resize handles. */
  handleSize: PropTypes.arrayOf(PropTypes.number),
  /** The initial height of the resizable component in pixels. */
  height: PropTypes.number,
  /** The maximum dimensions `[width, height]` in pixels that the component can be resized to. */
  maxConstraints: PropTypes.arrayOf(PropTypes.number),
  /** The minimum dimensions `[width, height]` in pixels that the component can be resized to. */
  minConstraints: PropTypes.arrayOf(PropTypes.number),
  /** Callback function invoked during the resize operation. Receives the event and an object containing the current size. */
  onResize: PropTypes.func,
  /** Callback function invoked when the resize operation starts. */
  onResizeStart: PropTypes.func,
  /** Callback function invoked when the resize operation stops. */
  onResizeStop: PropTypes.func,
  /** Specifies which resize handles should be visible. Defaults to `['se']`. */
  resizeHandles: PropTypes.arrayOf(
    PropTypes.oneOf(Object.values(RESIZEABLE_DIRECTIONS))
  ),
  /** The initial width of the resizable component in pixels. */
  width: PropTypes.number,
};

ResizableWrapper.displayName = "Resizable";

/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-resizable--primary
 * @zeroHeight
 * @end
 */

export default ResizableWrapper;
