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

import React, {
  Fragment,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { Transition } from "@headlessui/react";
import { MdClose } from "react-icons/md";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import PropTypes from "prop-types";

import Button from "../Button";
import Resizable from "../Resizable";

import { SLIDEOVER_CLASSES, SLIDEOVER_SIZES } from "./constants/slideover";
import useSlideover from "./useSlideover";
import useSlideoverMargin from "./useSlideoverMargin";

/**
 * @type {React.FC<SlideoverProps>}
 */
const Slideover = ({
  id = null,
  backgroundOverlay = true,
  children = null,
  childrenWrapperClassName = "",
  closeButtonOutside = false,
  initialFocusRef = null,
  isFluid = false,
  onCloseWithOutsideButton = null,
  onEscPress = null,
  onOverlayClick = null,
  show = false,
  size = SLIDEOVER_SIZES.LG,
  topMarginElementId = "",
  wrapperClassName = "",
  resizableWrapperProps = {},
}) => {
  const childrenWrapperClassNames = `relative flex h-full flex-col overflow-auto bg-neutral-default shadow-xl w-screen inset-0 ${childrenWrapperClassName}`;
  const { marginTopAdjustment } = useSlideoverMargin(topMarginElementId);
  const previousFocusRef = useRef(null);
  const containerRef = useSlideover(onEscPress, show, initialFocusRef);
  const announceRef = useRef(null);
  const [currentWidth, setCurrentWidth] = useState(
    resizableWrapperProps?.width
  );
  const originalWidthRef = useRef(resizableWrapperProps?.width);

  const {
    onResize,
    onResizeStart,
    onResizeStop,
    maxConstraints,
    minConstraints,
  } = resizableWrapperProps;

  const onCloseClick = () => {
    onCloseWithOutsideButton?.();
  };

  const onOverlayHandler = () => {
    onOverlayClick?.();
  };

  useEffect(() => {
    if (resizableWrapperProps?.width !== undefined) {
      originalWidthRef.current = resizableWrapperProps.width;
      setCurrentWidth(resizableWrapperProps.width);
    }
  }, [resizableWrapperProps?.width]);

  const customOnResize = useCallback(
    (e, data) => {
      if (onResize) {
        onResize(e, data);
      }

      if (data && data.size && data.size.width) {
        setCurrentWidth(data.size.width);
      }
    },
    [onResize]
  );

  const customOnResizeStop = useCallback(
    (e, data) => {
      if (onResizeStop) {
        onResizeStop(e, data);
      }

      if (data && data.size && data.size.width) {
        setCurrentWidth(data.size.width);
      }
    },
    [onResizeStop]
  );

  const handleResize = useCallback(
    (__resizeHandleAxis, ref) => (
      <div
        className="absolute left-0 top-0 h-full w-3 rounded hover:cursor-col-resize"
        ref={ref}
        onDoubleClick={() => {
          setCurrentWidth(originalWidthRef.current);
        }}
      >
        <span className="group absolute left-0 top-0 h-full w-full">
          <span className="block h-full w-0.5 -translate-x-0.5 bg-brand-default opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          <span className="absolute left-1/2 top-1/2 z-100 h-8 w-1 -translate-x-1/2 -translate-y-1/2 rounded bg-neutral-strongest" />
        </span>
      </div>
    ),
    []
  );

  useEffect(() => {
    if (announceRef.current) {
      announceRef.current.textContent = show
        ? "Slideover opened"
        : "Slideover closed";
    }
  }, [show]);

  useEffect(() => {
    let timeoutId;

    const handleFocus = () => {
      try {
        if (!show) {
          if (previousFocusRef.current?.isConnected) {
            previousFocusRef.current?.focus({ preventScroll: true });
          }
          return;
        }

        previousFocusRef.current = document.activeElement;

        timeoutId = requestAnimationFrame(() => {
          if (initialFocusRef?.current?.isConnected) {
            initialFocusRef.current.focus({ preventScroll: true });
          }
        });
      } catch (error) {
        // console.error('Focus management error:', error);
      }
    };

    handleFocus();

    return () => {
      if (timeoutId) {
        cancelAnimationFrame(timeoutId);
      }
    };
  }, [show, initialFocusRef]);

  return (
    <>
      <div
        ref={announceRef}
        aria-live="assertive"
        aria-atomic="true"
        className="sr-only"
        role="status"
      />
      <div
        ref={containerRef}
        className={twClassNames("relative z-300", wrapperClassName, {
          "z-100": !backgroundOverlay,
        })}
        {...(id !== null && { id })}
      >
        <Transition show={show} unmount={false}>
          {backgroundOverlay ? (
            <Transition.Child
              appear="true"
              unmount={false}
              enter="ease-in duration-500"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-500"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div
                role="presentation"
                style={{ marginTop: marginTopAdjustment }}
                className={twClassNames(
                  `fixed inset-0 bg-neutral-inverse-weakest`,
                  {
                    "opacity-75": backgroundOverlay,
                    "opacity-0": !backgroundOverlay,
                  }
                )}
                onClick={onOverlayHandler}
              />
            </Transition.Child>
          ) : null}

          <Transition.Child
            as={Fragment}
            appear="true"
            unmount={false}
            enter="transform transition ease-out duration-500"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transform transition ease-out duration-500"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <div
              aria-labelledby={id ? `${id}-title` : undefined}
              className={twClassNames(
                "fixed inset-y-0 right-0 flex items-start",
                {
                  "border-l border-neutral-default": !closeButtonOutside,
                }
              )}
              style={{ marginTop: marginTopAdjustment }}
              tabIndex="-1"
            >
              {closeButtonOutside && (
                <div className="flex pr-1 pt-4">
                  <Button
                    colors="white"
                    size="large"
                    variant="minimal"
                    onClick={onCloseClick}
                    aria-label="Close slideover"
                  >
                    <MdClose
                      className="h-6 w-6 rounded-md bg-neutral-inverse-weakest icon-neutral-weakest hover:icon-neutral-inverse-default"
                      aria-hidden="true"
                    />
                  </Button>
                </div>
              )}

              {isFluid ? (
                <Resizable
                  resizeHandles={["w"]}
                  handle={handleResize}
                  handleSize={[60, 1]}
                  onResize={customOnResize}
                  onResizeStart={onResizeStart}
                  onResizeStop={customOnResizeStop}
                  className="relative h-full shrink-0"
                  maxConstraints={maxConstraints}
                  minConstraints={minConstraints}
                  width={currentWidth}
                  aria-label="Resize slideover"
                >
                  <div
                    className={twClassNames(
                      childrenWrapperClassNames,
                      "w-full"
                    )}
                  >
                    {children}
                  </div>
                </Resizable>
              ) : (
                <div
                  className={twClassNames(
                    childrenWrapperClassNames,
                    SLIDEOVER_CLASSES[size]
                  )}
                >
                  {children}
                </div>
              )}
            </div>
          </Transition.Child>
        </Transition>
      </div>
    </>
  );
};

Slideover.propTypes = {
  /** Toggles if the semi-transparent background overlay is visible. When true, clicking the overlay can trigger the `onOverlayClick` callback. */
  backgroundOverlay: PropTypes.bool,
  /** The content to be displayed within the slideover panel. */
  children: PropTypes.node,
  /** Custom CSS class name(s) to apply to the direct container of the `children`. */
  childrenWrapperClassName: PropTypes.string,
  /** If true, renders the close button outside the slideover panel for easier access, especially on smaller viewports. */
  closeButtonOutside: PropTypes.bool,
  /** Unique identifier for the root element of the slideover. If provided, it's used to generate `aria-labelledby` for the slideover panel. */
  id: PropTypes.string,
  /** A ref pointing to the element that should receive focus when the slideover opens. Helps manage focus for accessibility. */
  initialFocusRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.object }),
  ]),
  /** If true, the slideover becomes resizable horizontally. Requires `resizableWrapperProps` with at least `width` defined. */
  isFluid: PropTypes.bool,
  /** Callback fired when the outside close button is clicked. */
  onCloseWithOutsideButton: PropTypes.func,
  /** Callback fired when the Escape key is pressed while the slideover is open. */
  onEscPress: PropTypes.func,
  /** Callback fired when the background overlay is clicked. */
  onOverlayClick: PropTypes.func,
  /** Configuration for the resizable wrapper when `isFluid` is true. */
  resizableWrapperProps: PropTypes.shape({
    /** Maximum width and height constraints for resizing. Example: `[800, Infinity]` */
    maxConstraints: PropTypes.arrayOf(PropTypes.number),
    /** Minimum width and height constraints for resizing. Example: `[300, Infinity]` */
    minConstraints: PropTypes.arrayOf(PropTypes.number),
    /** Callback function fired when the component is resized. Receives the event and data object with size information. */
    onResize: PropTypes.func,
    /** Callback fired when resize starts. Receives the event and data object. */
    onResizeStart: PropTypes.func,
    /** Callback fired when resize stops. Receives the event and data object with final size information. */
    onResizeStop: PropTypes.func,
    /** The initial width of the resizable component. This is required when `isFluid` is true. */
    width: PropTypes.number.isRequired,
  }),
  /** Controls the visibility of the slideover. When true, the slideover is displayed. */
  show: PropTypes.bool,
  /** Predefined size of the slideover. Example values: `'SM'`, `'MD'`, `'LG'`. */
  size: PropTypes.string,
  /** ID of the element used to calculate the top margin adjustment for the slideover. */
  topMarginElementId: PropTypes.string,
  /** Custom CSS class name(s) to apply to the wrapper of the slideover and overlay. */
  wrapperClassName: PropTypes.string,
};

export default Slideover;

/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-slideover--resizeable-example
 * @zeroHeight https://zeroheight.com/023d5159d/p/544a29-slide-over/b/051181
 * @end
 */
