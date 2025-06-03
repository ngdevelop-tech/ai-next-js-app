/**
 * @typedef {Object} ListTreeNodeProps
 * @property {boolean} [Draggable=false] - If true, makes the node draggable using `dnd-kit`. Requires additional setup with `DndContext`, sensors, and strategies.
 * @property {object} [active=null] - Information about the currently active (dragged) ListTreeNode. Provided by `dnd-kit`.
 * @property {string|number} [active.id] - The unique identifier of the active node.
 * @property {number} [activeIndex=null] - Index of the currently active (dragged) ListTreeNode. Provided by `dnd-kit`.
 * @property {string} [ariaLabel=''] - Custom ARIA label for the ListTreeNode, enhancing accessibility.
 * @property {object} [attributes={}] - Additional attributes provided by `dnd-kit` for draggable elements.
 * @property {string} [attributes.role] - Role attribute, typically 'treeitem'.
 * @property {React.ReactNode} [description=null] - Additional descriptive text displayed on the right side of the node.
 * @property {string} [focusIDPrefix=''] - Prefix string added to the `data-focus-id` attribute for focus management within a list or tree structure.
 * @property {string} focusUUID - Unique identifier for the ListTreeNode, used for focus management and selection.
 * @property {boolean} [hideArrowIcon=false] - If true, hides the expand/collapse arrow icon. Useful for leaf nodes or nodes that cannot have children.
 * @property {string} [id=null] - Optional unique HTML id attribute for the root element of the component.
 * @property {boolean} [isDragging=false] - Specifies if the ListTreeNode is currently being dragged. Provided by `dnd-kit`.
 * @property {boolean} [isFocused=false] - If true, applies focus styling to the node. Typically managed by a parent ListTree component.
 * @property {boolean} [isHovering=false] - Specifies if the mouse cursor is currently hovering over the ListTreeNode, used for drag-and-drop indication.
 * @property {boolean} [isNodeOpen=false] - Controls the expanded/collapsed state of the node. If `undefined`, the internal state managed by `Disclosure` is used.
 * @property {boolean} [isNodeSelectable=true] - If true, the node can be selected via `onNodeClick`.
 * @property {boolean} [isNodeSelected=false] - If true, applies selected styling to the node.
 * @property {boolean} [isOver=false] - Specifies if another draggable element is currently being dragged over this ListTreeNode. Provided by `dnd-kit`.
 * @property {string} [itemWrapperClassName=''] - Custom CSS class name(s) to style the outer `div` wrapper (role="treeitem").
 * @property {React.ReactNode} label - The main label/text content for the ListTreeNode. **Required**.
 * @property {React.ReactNode} [leadingIcon=null] - Custom icon element displayed before the label. Defaults to `<MdFolder />` if `showIcon` is true.
 * @property {object} [listeners={}] - Event listeners provided by `dnd-kit` for draggable elements (e.g., for drag handles).
 * @property {string} [nodeLabelClassName=''] - Custom CSS class name(s) to style the label text container.
 * @property {function} [onNodeClick=null] - Callback function triggered when the node itself (excluding the arrow and trailing icon) is clicked. `(event: React.MouseEvent) => void`.
 * @property {function} [onNodeOpen=null] - Callback function triggered when the expand/collapse arrow icon is clicked. `() => void`.
 * @property {function} [onTrailingIconClick=null] - Callback function triggered when the `trailingVisualElement` is clicked. `() => void`.
 * @property {object} [over=null] - Information about the element being dragged over this ListTreeNode. Provided by `dnd-kit`.
 * @property {string|number} [over.id] - The unique identifier of the element being dragged over.
 * @property {boolean} [showIcon=true] - If true, shows the leading icon (either the default folder icon or the custom `leadingIcon`).
 * @property {object} [styles={}] - Inline styles provided by `dnd-kit` for positioning during drag operations.
 * @property {React.ReactNode} [trailingVisualElement=null] - Custom element (e.g., an icon button) displayed next to the label on hover or focus.
 * @property {object} [transform=null] - Transformation details (e.g., position offset) applied during drag operations. Provided by `dnd-kit`.
 * @property {number} [transform.y] - Vertical transformation offset.
 * @property {string} [wrapperClassName=''] - Custom CSS class name(s) to style the inner `ListTreeNodeWrapper` component.
 * @property {React.Ref<HTMLDivElement>} [wrapperRef=null] - Ref provided by `dnd-kit` to attach to the draggable element's wrapper.
 */

import React, { forwardRef, Fragment } from "react";
import DragFolderIcon from "@/packages/design-stack-icons/src/DragFolderIcon";
import { MdChevronRight, MdExpandMore, MdFolder } from "react-icons/md";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import { Disclosure } from "@headlessui/react";
import PropTypes from "prop-types";

import ListTreeNodeWrapper from "./components/ListTreeNodeWrapper";

/**
 * Represents a single node within a ListTree structure.
 * It can display text, icons, handle selection, expansion/collapse, and optional drag-and-drop functionality.
 *
 * @component
 * @example
 * // Basic usage
 * <ListTreeNode label="My Folder" focusUUID="folder-1" />
 *
 * @example
 * // Selectable and open node with description
 * <ListTreeNode
 *   label="Documents"
 *   description="Contains important files"
 *   focusUUID="docs-1"
 *   isNodeSelected={true}
 *   isNodeOpen={true}
 *   onNodeClick={() => console.log('Node clicked')}
 *   onNodeOpen={() => console.log('Node toggled')}
 * />
 *
 * @example
 * // Draggable node (requires dnd-kit setup)
 * <ListTreeNode
 *   label="Draggable Item"
 *   focusUUID="drag-1"
 *   Draggable={true}
 *   attributes={dndAttributes}
 *   listeners={dndListeners}
 *   wrapperRef={setNodeRef}
 *   isDragging={isDragging}
 *   // ... other dnd props
 * />
 *
 * @see ListTree For the parent component that typically manages a collection of ListTreeNodes.
 * @see {@link https://headlessui.com/react/disclosure Headless UI Disclosure} Used internally for expand/collapse functionality.
 * @see {@link https://dndkit.com/ dnd-kit} Used for optional drag-and-drop features.
 *
 * @accessibility
 * - Uses `role="treeitem"` for semantic structure within a tree.
 * - Manages `tabIndex` for keyboard navigation.
 * - Supports `aria-label` for custom accessibility labels.
 * - Uses `aria-hidden` on the disclosure button as it's controlled programmatically or via node click.
 * - `data-focus-id` attribute aids focus management in parent components.
 * - `data-has-children` attribute indicates if the node can be expanded.
 *
 * @type {React.ForwardRefExoticComponent<ListTreeNodeProps & React.RefAttributes<HTMLDivElement>>}
 */
const ListTreeNode = forwardRef(
  (
    {
      ariaLabel = "",
      description = null,
      focusIDPrefix = "",
      focusUUID,
      hideArrowIcon = false,
      id = null,
      isFocused = false,
      isNodeOpen = false,
      isNodeSelectable = true,
      isNodeSelected = false,
      itemWrapperClassName = "",
      label,
      leadingIcon = null,
      nodeLabelClassName = "",
      onNodeClick = null,
      onNodeOpen = null,
      onTrailingIconClick = null,
      showIcon = true,
      trailingVisualElement = null,
      wrapperClassName = "",
      attributes = {},
      listeners = {},
      styles = {},
      isDragging = false,
      wrapperRef = null,
      isOver = false,
      over = null,
      active = null,
      transform = null,
      isHovering = false,
      Draggable = false,
    },
    ref
  ) => (
    <div
      role="treeitem"
      tabIndex={focusUUID === "0" && !isNodeSelectable ? 0 : -1}
      className={twClassNames("group", itemWrapperClassName)}
      aria-label={ariaLabel}
      data-focus-id={focusIDPrefix + focusUUID}
      data-has-children={!hideArrowIcon}
      ref={wrapperRef}
      {...(id !== null && { id })}
    >
      <ListTreeNodeWrapper
        isNodeSelectable={isNodeSelectable}
        isNodeSelected={isNodeSelected}
        onNodeClick={onNodeClick}
        isFocused={isFocused}
        ref={ref}
        wrapperClassName={twClassNames(
          "relative flex flex-1 items-center justify-between rounded border border-transparent p-1.5 hover:bg-neutral-strong-hover focus:border-brand-stronger focus:bg-neutral-stronger",
          {
            "bg-brand-weakest": isNodeSelected,
            "bg-neutral-stronger": isFocused,
          },
          wrapperClassName
        )}
      >
        <>
          <div
            className={twClassNames("flex w-full grow items-center", {
              "opacity-40": Draggable && active && active.id === focusUUID,
            })}
          >
            <Disclosure.Button as={Fragment} role="button" aria-hidden>
              {({ open }) => (
                <div
                  className={twClassNames("mr-1 w-5 select-none", {
                    "invisible ": hideArrowIcon,
                  })}
                  role="presentation"
                  onClick={event => {
                    onNodeOpen?.();
                    event.stopPropagation();
                  }}
                >
                  {isNodeOpen || (isNodeOpen === undefined && open) ? (
                    <MdExpandMore className="h-5 w-5 icon-neutral-default" />
                  ) : (
                    <MdChevronRight className="h-5 w-5 icon-neutral-weak" />
                  )}
                </div>
              )}
            </Disclosure.Button>

            {showIcon && (
              <>
                <div
                  {...(Draggable ? { ...listeners, ...attributes } : {})}
                  className={`mr-2 h-5 w-5 shrink-0 select-none icon-sky-400 dark:icon-sky-600 ${
                    Draggable ? "group-hover:hidden" : ""
                  }`}
                >
                  {leadingIcon || <MdFolder className="h-full w-full" />}
                </div>
                {Draggable && (
                  <div
                    {...(Draggable ? { ...listeners, ...attributes } : {})}
                    className="mr-2 hidden h-5 w-5 shrink-0 select-none icon-sky-400 hover:cursor-grab group-hover:block dark:icon-sky-600"
                  >
                    <DragFolderIcon className="h-full w-full" />
                  </div>
                )}
              </>
            )}

            <div
              className={twClassNames(
                "relative mr-2 text-xs leading-5 text-neutral-weak",
                nodeLabelClassName,
                {
                  "font-medium": isNodeSelected,
                }
              )}
            >
              {label}
            </div>

            <div
              role="presentation"
              className={twClassNames(
                "flex opacity-0 group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100 group-focus:visible group-focus:opacity-100"
              )}
              onClick={e => {
                e.stopPropagation();
                onTrailingIconClick?.();
              }}
            >
              {trailingVisualElement}
            </div>
          </div>

          <div
            className={twClassNames(
              "shrink-0 text-xs leading-5 text-neutral-weaker",
              {
                "font-medium": isNodeSelected,
              }
            )}
          >
            {description}
          </div>
        </>
      </ListTreeNodeWrapper>
      {isDragging && Draggable && (
        <div
          style={styles}
          className={twClassNames("absolute z-99 w-full !opacity-100", {
            hidden: (isOver && over && over.id === focusUUID) || isHovering,
            "top-0": transform?.y < 0,
          })}
        >
          <div className=" h-[2px] bg-brand-stronger opacity-100 " />
        </div>
      )}
    </div>
  )
);

/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-listtree--controlled-tree
 * @zeroHeight https://zeroheight.com/023d5159d/p/08d92b-list-tree/b/4635b4
 * @end
 */

export default ListTreeNode;
