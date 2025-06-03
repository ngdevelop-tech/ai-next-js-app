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

import React, { forwardRef, useEffect, useRef } from "react";
import { MdDragIndicator } from "react-icons/md";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import PropTypes from "prop-types";

import {
  ICON_DESCRIPTION_GAP,
  ICON_DESCRIPTION_GAP_CLASSES,
  LF_ICON_CLASSES,
  LF_ICON_COLOR,
  LF_ICON_COLOR_VARIANT_CLASSES,
  LF_ICON_CONTAINER_CLASSES,
  LF_ICON_CONTAINER_SIZE,
  LF_ICON_SIZE,
  LF_ICON_VARIANT,
  LF_ICON_WITH_FEED_NO_CLASSES,
  LF_MARGIN_CLASSES,
  LF_MARGIN_SIZE,
} from "./constants/listFeedsNode";
import { useListFeedsNode } from "./useListFeedsNode";

/**
 * Note: <strong>Drag and drop implementation guidelines</strong>: https://browserstack.atlassian.net/wiki/spaces/ENG/pages/4045308874/Drag+and+Drop+guidelines
 */

// Create a global state to track the currently hovered item
// Using a safer approach to define global state
const setupGlobalState = () => {
  if (typeof window === "undefined") return;

  window.listFeedsState = window.listFeedsState || {
    hoveredId: null,
    hoverEvent: null,
  };

  if (!window.listFeedsState.hoverEvent) {
    window.listFeedsState.hoverEvent = new Event("listFeedHoverChange");
  }
};

setupGlobalState();

const useDragHandle = ({
  showDragHandle,
  uniqueId,
  feedNumberRef,
  dragHandleRef,
}) => {
  useEffect(() => {
    if (!showDragHandle) {
      return undefined;
    }

    const feedNumberElement = feedNumberRef.current;
    const dragHandleElement = dragHandleRef.current;

    if (!feedNumberElement || !dragHandleElement) {
      return undefined;
    }

    const updateElementVisibility = isHovered => {
      feedNumberElement.style.opacity = isHovered ? "0" : "1";
      dragHandleElement.style.display = isHovered ? "flex" : "none";
    };

    const handleHoverStateChange = () => {
      const isHovered = window?.listFeedsState?.hoveredId === uniqueId;
      updateElementVisibility(isHovered);
    };

    document?.addEventListener("listFeedHoverChange", handleHoverStateChange);

    handleHoverStateChange();

    return () => {
      document?.removeEventListener(
        "listFeedHoverChange",
        handleHoverStateChange
      );

      if (window?.listFeedsState?.hoveredId === uniqueId) {
        window.listFeedsState.hoveredId = null;
      }
    };
  }, [uniqueId, showDragHandle, feedNumberRef, dragHandleRef]);

  const handleMouseOver = e => {
    if (showDragHandle && window?.listFeedsState) {
      window.listFeedsState.hoveredId = uniqueId;
      document?.dispatchEvent(window.listFeedsState.hoverEvent);
    }
    e.stopPropagation();
  };

  const handleMouseOut = e => {
    if (showDragHandle && window?.listFeedsState?.hoveredId === uniqueId) {
      window.listFeedsState.hoveredId = null;
      document?.dispatchEvent(window.listFeedsState.hoverEvent);
    }
    e.stopPropagation();
  };

  return {
    handleMouseOver,
    handleMouseOut,
  };
};

/**
 * `ListFeedsNode` is a component designed to display items in a feed-like structure,
 * often used for timelines, step-by-step guides, or activity logs. It supports icons,
 * numbering, descriptions, headers, footers, connector lines, and optional drag-and-drop functionality.
 *
 * @type {React.ForwardRefExoticComponent<ListFeedsProps & React.RefAttributes<HTMLDivElement>>}
 */
const ListFeeds = forwardRef(
  (
    {
      descriptionNode = null,
      feedIcon,
      feedIconColor = LF_ICON_COLOR.GREY,
      feedIconContainerSize = LF_ICON_CONTAINER_SIZE.LG,
      feedIconSize = LF_ICON_SIZE.MD,
      feedIconVariant = LF_ICON_VARIANT.DARK,
      feedNumber = null,
      footerNode = null,
      headerNode = null,
      id = null,
      isFeedIconBorder = false,
      showConnector = true,
      spacing = LF_MARGIN_SIZE.DEFAULT,
      wrapperClassName = "",
      iconDescriptionGap = ICON_DESCRIPTION_GAP.DEFAULT,
      isDraggable = false,
      dragHandleProps = {},
      customDragHandle = null,
      dragHandleClassName = "",
    },
    ref
  ) => {
    const {
      throttledMouseMove,
      footerNodeRef,
      hideHoverContainer,
      showHoverContainer,
      combinedRefs,
    } = useListFeedsNode(ref);

    const uniqueId = useRef(
      id ||
        (isDraggable
          ? `list-feed-${Math.random().toString(36).substring(2, 15)}`
          : null)
    ).current;

    const feedNumberRef = useRef(null);
    const dragHandleRef = useRef(null);

    const showDragHandle = isDraggable && !!feedNumber;

    const { handleMouseOver, handleMouseOut } = useDragHandle({
      showDragHandle,
      uniqueId,
      feedNumberRef,
      dragHandleRef,
    });

    return (
      <div
        ref={combinedRefs}
        className={twClassNames("relative mb-2 flex", wrapperClassName)}
        data-testid={isDraggable ? `list-feed-${uniqueId}` : undefined}
        onMouseOver={isDraggable ? handleMouseOver : undefined}
        onMouseOut={isDraggable ? handleMouseOut : undefined}
        onMouseLeave={!isDraggable ? hideHoverContainer : undefined}
        onMouseMove={throttledMouseMove}
        onFocus={isDraggable ? () => {} : undefined}
        onBlur={isDraggable ? () => {} : undefined}
        {...(uniqueId !== null && { id: uniqueId })}
      >
        {!!feedNumber && (
          <div
            className={twClassNames(
              "relative flex min-w-[20px] max-w-[20px] items-center justify-center",
              LF_ICON_WITH_FEED_NO_CLASSES[feedIconSize]
            )}
          >
            {isDraggable ? (
              <div
                ref={feedNumberRef}
                className="transition-opacity duration-200"
              >
                {feedNumber}
              </div>
            ) : (
              feedNumber
            )}

            {showDragHandle && (
              <div
                ref={dragHandleRef}
                className={twClassNames(
                  "absolute inset-0 hidden cursor-grab items-center justify-center",
                  dragHandleClassName
                )}
                {...dragHandleProps}
                aria-label="Drag to reorder"
              >
                {customDragHandle || (
                  <MdDragIndicator className="h-5 w-5 fill-neutral-weak hover:fill-neutral-strong" />
                )}
              </div>
            )}
          </div>
        )}
        <div
          className={twClassNames("flex flex-col justify-center", {
            "self-start": !showConnector,
          })}
        >
          <div
            className={twClassNames(
              "flex items-start justify-center",
              LF_ICON_CONTAINER_CLASSES[feedIconContainerSize]
            )}
          >
            <div
              className={twClassNames(
                "box-border flex items-center justify-center rounded-full",
                LF_ICON_CLASSES[feedIconSize],
                LF_ICON_COLOR_VARIANT_CLASSES[feedIconVariant][feedIconColor],
                {
                  "border-0": !isFeedIconBorder,
                }
              )}
            >
              {feedIcon}
            </div>
          </div>
          {showConnector && (
            <div
              className={twClassNames(
                "flex min-h-[16px] grow justify-center divide-x divide-neutral-strong pt-2"
              )}
            >
              <div className="h-full w-1/2" />
              <div className="h-full w-1/2" />
            </div>
          )}
        </div>
        <div
          className={twClassNames(
            "grow",
            LF_MARGIN_CLASSES[spacing],
            ICON_DESCRIPTION_GAP_CLASSES[iconDescriptionGap]
          )}
        >
          {!!headerNode && <div>{headerNode}</div>}
          {!!descriptionNode && <div>{descriptionNode}</div>}
        </div>
        {!!footerNode && (
          <div
            ref={footerNodeRef}
            onFocus={showHoverContainer}
            onBlur={hideHoverContainer}
            className={`absolute bottom-0 ${
              isDraggable ? "z-[-1]" : ""
            } w-full opacity-0 transition-opacity ${
              isDraggable ? "duration-200" : ""
            }`}
          >
            {footerNode}
          </div>
        )}
      </div>
    );
  }
);

ListFeeds.propTypes = {
  /** Custom React node to replace the default drag handle icon. Only relevant when `isDraggable` is true. */
  customDragHandle: PropTypes.node,
  /** Node containing the description content to be displayed within the component. */
  descriptionNode: PropTypes.node,
  /** Additional CSS class name(s) for the drag handle container. Only relevant when `isDraggable` is true. */
  dragHandleClassName: PropTypes.string,
  /** Props to be spread onto the drag handle element. Useful for integrating with drag-and-drop libraries (e.g., dnd-kit). Only relevant when `isDraggable` is true. */
  dragHandleProps: PropTypes.shape({}),
  /** A custom React node representing an icon or image to be displayed as the feed icon. */
  feedIcon: PropTypes.node.isRequired,
  /** Specifies the color theme for the feed icon. */
  feedIconColor: PropTypes.oneOf(Object.values(LF_ICON_COLOR)),
  /** Specifies the size of the container surrounding the feed icon. */
  feedIconContainerSize: PropTypes.oneOf(Object.values(LF_ICON_CONTAINER_SIZE)),
  /** Specifies the size of the feed icon itself. */
  feedIconSize: PropTypes.oneOf(Object.values(LF_ICON_SIZE)),
  /** Specifies the visual variant of the feed icon (e.g., background style). */
  feedIconVariant: PropTypes.oneOf(Object.values(LF_ICON_VARIANT)),
  /** A React node (typically a number) displayed before the feed icon. */
  feedNumber: PropTypes.node,
  /** Node containing the footer content, often displayed on hover. */
  footerNode: PropTypes.node,
  /** Node containing the header content displayed above the description. */
  headerNode: PropTypes.node,
  /** Specifies the horizontal gap between the feed icon section and the description/header/footer section. */
  iconDescriptionGap: PropTypes.oneOf(Object.values(ICON_DESCRIPTION_GAP)),
  /** Optional unique identifier for the root element. */
  id: PropTypes.string,
  /** If true, enables drag-and-drop interactions. */
  isDraggable: PropTypes.bool,
  /** Determines whether to show a border around the feed icon. */
  isFeedIconBorder: PropTypes.bool,
  /** Determines whether to display vertical connector lines below the feed icon. */
  showConnector: PropTypes.bool,
  /** Specifies the vertical margin below the feed item. */
  spacing: PropTypes.oneOf(Object.values(LF_MARGIN_SIZE)),
  /** Additional CSS class name(s) to apply to the root `div` element of the component. */
  wrapperClassName: PropTypes.string,
};

ListFeeds.displayName = "ListFeedsNode";

/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-listfeedsnode--primary
 * @zeroHeight https://zeroheight.com/023d5159d/p/95afef-feeds/b/4635b4
 * @end
 */

export default ListFeeds;
