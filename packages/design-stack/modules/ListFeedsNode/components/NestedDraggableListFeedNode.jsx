/**
 * @typedef {Object} SortableStepProps
 * @property {string} activeId?
 * @property {string[]} expanded
 * @property {(event: React.MouseEvent<any>) => void} handleStepClick
 * @property {boolean} isDraggable?
 * @property {any} items?
 * @property {string} id
 * @property {string} parentId?
 */

/**
 *
 * FOR STORYBOOK ONLY
 * this shows how to implement a nested listfeed with drag and drop functionality
 */

import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  MdCheckCircle,
  MdChevronRight,
  MdDragIndicator,
  MdFolder,
  MdImportExport,
  MdPending,
  MdPlayCircle,
} from "react-icons/md";
import {
  closestCenter,
  DndContext,
  DragOverlay,
  KeyboardSensor,
  MouseSensor,
  TouchSensor,
  useDndMonitor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import PropTypes from "prop-types";

import { ListFeedsNode } from "../../../index";

const getDirectChildren = (parentId, items) =>
  items.filter(item => item.parentId === parentId);

const hasChildren = (nodeId, items) =>
  items.some(item => item.parentId === nodeId);

// Check if item is a root (no parentId)
const isRootItem = item => !item.parentId;

// Sortable Item Component
/**
 * @type {React.FC<SortableStepProps>}
 */
const SortableStep = ({
  step,
  items,
  expanded,
  toggleExpand,
  handleStepClick,
  isDraggable = true,
  activeId = null,
  overId = null,
}) => {
  // Determine depth level
  const hasSubSteps = hasChildren(step.id, items);
  const isRoot = isRootItem(step);
  const isExpanded = expanded.includes(step.id);

  // Sortable hook
  const {
    attributes,
    listeners,
    setNodeRef,
    transition,
    isDragging,
    over,
    isOver,
    isActive,
    active,
  } = useSortable({
    id: step.id,
    data: {
      step,
      parentId: step.parentId,
    },
    disabled: !isDraggable, // Root items are not draggable
  });

  const indicatorPosition = useRef(null);
  // find previous and next sibling of active element

  useDndMonitor({
    onDragMove: ({ over: overEl, active: activeEl }) => {
      let draggableCenterY;
      if (activeEl.rect.current.translated) {
        draggableCenterY =
          activeEl.rect.current.translated?.top +
          activeEl.rect.current.translated?.height / 2;
      }
      let overCenterY;
      if (overEl) {
        overCenterY = overEl.rect.top + overEl.rect.height / 2;
      }

      if (draggableCenterY <= overCenterY && activeEl.id !== overEl.id) {
        indicatorPosition.current = "top";
      } else if (draggableCenterY >= overCenterY && activeEl.id !== overEl.id) {
        indicatorPosition.current = "bottom";
      }
    },
  });

  // Set indicator visibility based on active drag and hover state
  const showTopIndicator =
    isOver && active?.id !== over?.id && indicatorPosition.current === "top";
  const showBottomIndicator =
    isOver && active?.id !== over?.id && indicatorPosition.current === "bottom";

  // Style for dragging
  const style = {
    transition,
    opacity: isDragging ? 0.5 : 1,
    position: "relative",
    zIndex: isDragging ? 999 : "auto",
  };
  // Get the icon based on step state and type
  const getIcon = () => {
    if (isRoot) {
      return <MdFolder className="h-5 w-5 fill-brand-default" />;
    }

    if (step.status === "running") {
      return <MdPlayCircle className="h-5 w-5 fill-brand-default" />;
    }

    if (step.completed) {
      return <MdCheckCircle className="h-5 w-5 fill-success-default" />;
    }

    if (step.isCondition) {
      return <MdImportExport className="h-5 w-5 fill-neutral-weak" />;
    }

    return <MdPending className="h-5 w-5 fill-neutral-weak" />;
  };

  // Render the feed number or drag handle
  const renderFeedNumber = () => {
    if (isRoot) {
      return (
        <div className="text-center text-xs leading-5 text-neutral-weakest">
          {step.feedNumber || " "}
        </div>
      );
    }

    return (
      <div className="relative">
        <div
          className={`  absolute  inset-0 flex items-center justify-center text-xs text-neutral-weakest transition-opacity `}
        >
          {step.feedNumber}
        </div>
      </div>
    );
  };

  // Render child steps if expanded
  const renderChildren = () => {
    if (!hasSubSteps || !isExpanded) return null;

    const children = getDirectChildren(step.id, items);

    return (
      <div className="my-1 space-y-1">
        {children.map(childStep => (
          <SortableStep
            key={childStep.id}
            step={childStep}
            items={items}
            expanded={expanded}
            toggleExpand={toggleExpand}
            handleStepClick={handleStepClick}
            isDraggable={isDraggable}
            activeId={activeId}
            overId={overId}
          />
        ))}
      </div>
    );
  };

  return (
    <div ref={setNodeRef} style={style}>
      {/* Top drop indicator */}
      {showTopIndicator && (
        <div className="relative">
          <div className="absolute inset-x-0 -top-1 z-10 h-0.5 bg-brand-default" />
        </div>
      )}

      <div>
        <ListFeedsNode
          feedNumber={renderFeedNumber()}
          feedIcon={getIcon()}
          id={step.id}
          feedIconSize="sm"
          feedIconColor={isRoot ? "brand" : "white"}
          feedIconVariant="light"
          feedIconContainerSize="sm"
          feedIconBorderColor={isActive ? "brand" : "neutral"}
          headerNode={
            <div className="flex w-full items-center gap-2">
              {hasSubSteps && (
                <button
                  type="button"
                  className="ml-2 flex items-center justify-center text-neutral-weak"
                  onClick={e => {
                    e.stopPropagation();
                    toggleExpand(step.id);
                  }}
                >
                  {isExpanded ? (
                    <MdChevronRight className="h-5 w-5 rotate-90" />
                  ) : (
                    <MdChevronRight className="h-5 w-5" />
                  )}
                </button>
              )}
              <div
                className={`group pointer-events-auto text-sm ${
                  isActive
                    ? "font-medium text-brand-default"
                    : "text-neutral-default"
                }`}
              >
                {step.title || `Step ${step.feedNumber}`}
              </div>
            </div>
          }
          isFeedIconBorder={!isDragging}
          descriptionNode={renderChildren()}
          isDraggable={isDraggable}
          isDragging={isDragging}
          dragHandleProps={{
            ...attributes,
            ...listeners,
          }}
        />
      </div>

      {/* Bottom drop indicator */}
      {showBottomIndicator && (
        <div className="relative ">
          <div className="absolute inset-x-0 bottom-2 z-10 h-0.5 bg-brand-default" />
        </div>
      )}
    </div>
  );
};

SortableStep.propTypes = {
  activeId: PropTypes.string,
  expanded: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleStepClick: PropTypes.func.isRequired,
  isDraggable: PropTypes.bool,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      parentId: PropTypes.string,
    })
  ).isRequired,
  overId: PropTypes.string,
  step: PropTypes.shape({
    completed: PropTypes.bool,
    feedNumber: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    id: PropTypes.string.isRequired,
    isCondition: PropTypes.bool,
    parentId: PropTypes.string,
    status: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
  toggleExpand: PropTypes.func.isRequired,
};

const NestedAccordionSteps = ({
  items: initialItems,
  onItemsChange = null,
  allowDrag = true,
}) => {
  const [items, setItems] = useState(initialItems || []);
  const [activeId, setActiveId] = useState(null);
  const [expanded, setExpanded] = useState([]);
  const [draggedItem, setDraggedItem] = useState(null);
  const [overId, setOverId] = useState(null);
  // Track drag position (above or below) for more precise placement
  const [dragPosition, setDragPosition] = useState(null);

  // Update items when initialItems change
  useEffect(() => {
    if (initialItems) {
      setItems(initialItems);
    }
  }, [initialItems]);

  // Set up sensors for drag detection
  const sensors = useSensors(
    useSensor(MouseSensor, {
      activationConstraint: { distance: 5 },
    }),
    useSensor(TouchSensor, {
      activationConstraint: { delay: 250, tolerance: 5 },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  // Toggle expansion of an item
  const toggleExpand = useCallback(itemId => {
    setExpanded(prev =>
      prev.includes(itemId)
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  }, []);

  /**
   * Determines where to place an item that's being dragged.
   * Rules:
   * - Root items can be reordered but not nested inside other items
   * - Non-root items can be placed anywhere (as siblings or children)
   * - When dropping on an expanded item, place as a child
   * - When dropping on a collapsed item, place as a sibling (above or below)
   */
  const findDropTarget = useCallback(
    (itemsArg, overItemId, activeItem, dragPositionArg) => {
      const overItem = itemsArg.find(item => item.id === overItemId);

      // RESTRICTION: Root items cannot be nested inside other items
      if (isRootItem(activeItem)) {
        // Root items can only be reordered at the root level
        if (overItem.parentId !== null) {
          return {
            parentId: null,
            nearestSibling: overItemId,
            position: dragPositionArg,
          };
        }
        if (overItem.parentId === null) {
          // eslint-disable-next-line consistent-return
          return;
        }
      }

      // CASE 1: Dropping on a root item
      if (isRootItem(overItem)) {
        // If root item is expanded and it's not a root item being dragged, add as a child
        if (expanded.includes(overItem.id) && overItem.parentId !== null) {
          return {
            parentId: overItem.id,
            nearestSibling: null,
            position: "inside",
          };
        }

        // Otherwise, place at root level as a sibling (above or below)
        return {
          parentId: null,
          nearestSibling: overItemId,
          position: dragPosition,
        };
      }

      // CASE 2: Dropping on a child item

      // If child has its own children AND is expanded, place inside as its child
      if (
        hasChildren(overItem.id, items) &&
        expanded.includes(overItem.id) &&
        !isRootItem(activeItem)
      ) {
        return {
          parentId: overItem.id,
          nearestSibling: null,
          position: "inside",
        };
      }

      // Otherwise, place as a sibling of the child (above or below)
      return {
        parentId: overItem.parentId,
        nearestSibling: overItemId,
        position: dragPosition,
      };
    },
    [dragPosition, expanded, items]
  );

  // Handle drag over to track the current over item and position for visual feedback
  const handleDragOver = useCallback(event => {
    const { over } = event;
    setOverId(over ? over.id : null);

    // Determine if dragging above or below the target
    if (over) {
      const overRect = over.rect;
      const middleY = overRect.top + overRect.height / 2;

      // If mouse is in the top half, position is 'above', otherwise 'below'
      setDragPosition(event.clientY < middleY ? "above" : "below");
    } else {
      setDragPosition(null);
    }
  }, []);

  const handleDragMove = useCallback(({ over: overEl, active: activeEl }) => {
    let draggableCenterY;
    if (activeEl.rect.current.translated) {
      draggableCenterY =
        activeEl.rect.current.translated?.top +
        activeEl.rect.current.translated?.height / 2;
    }
    let overCenterY;
    if (overEl) {
      overCenterY = overEl.rect.top + overEl.rect.height / 2;
    }

    if (
      draggableCenterY <= overCenterY &&
      // draggableCenterY >= overCenterY - 2 &&
      activeEl.id !== overEl.id
    ) {
      setDragPosition("above");
    } else {
      setDragPosition("below");
    }
  }, []);

  // Handle drag start - store the item being dragged
  const handleDragStart = useCallback(
    event => {
      const { active } = event;
      setDraggedItem(items.find(item => item.id === active.id));
      setActiveId(active.id);
    },
    [items]
  );

  const handleDragEnd = useCallback(
    // eslint-disable-next-line sonarjs/cognitive-complexity
    event => {
      const { active, over } = event;

      // If no valid drop target or dropped on itself, abort
      if (!over || active.id === over.id) {
        setDraggedItem(null);
        setOverId(null);
        setActiveId(null);
        setDragPosition(null);
        return;
      }

      const activeItem = items.find(item => item.id === active.id);
      const overItem = items.find(item => item.id === over.id);

      if (!activeItem || !overItem) {
        setDraggedItem(null);
        setOverId(null);
        setActiveId(null);
        setDragPosition(null);
        return;
      }

      // NEW LOGIC: Check if we're trying to modify a root item in a non-reordering way

      // Only allow drops if the target is also a root item
      if (isRootItem(activeItem) && !isRootItem(overItem)) {
        // Cancel the drop operation completely for root items being dropped on non-root items

        setDraggedItem(null);
        setOverId(null);
        setActiveId(null);
        setDragPosition(null);
        return;
      }

      const expandedBeforeDrag = [...expanded];

      setItems(prevItems => {
        const activeItemElement = prevItems.find(item => item.id === active.id);
        const overItemElement = prevItems.find(item => item.id === over.id);

        if (!activeItemElement || !overItemElement) {
          return prevItems;
        }

        // For root items, enforce they can only be reordered at root level
        if (isRootItem(activeItemElement)) {
          // Only allow reordering at root level
          if (!isRootItem(overItemElement)) {
            // Cancel the operation by returning unchanged items
            return prevItems;
          }

          // Root item reordering logic - only allow at root level
          const rootItems = prevItems.filter(item => !item.parentId);
          const otherItems = prevItems.filter(item => item.parentId !== null);

          const activeIndex = rootItems.findIndex(
            item => item.id === active.id
          );
          let overIndex = rootItems.findIndex(item => item.id === over.id);

          // Adjust position based on drag direction
          if (dragPosition === "below" && activeIndex > overIndex) {
            overIndex += 1;
          } else if (dragPosition === "above" && activeIndex < overIndex) {
            overIndex -= 1;
          }

          // Reorder root items only
          const reorderedRootItems = arrayMove(
            rootItems,
            activeIndex,
            overIndex
          );
          const result = [...otherItems, ...reorderedRootItems];

          // Notify parent component of changes
          if (onItemsChange) {
            onItemsChange(result);
          }

          return result;
        }

        // For non-root items, proceed with the existing logic
        const { parentId, nearestSibling, position } = findDropTarget(
          prevItems,
          over.id,
          activeItem,
          dragPosition
        );

        // Create a new array with the updated parentId for the dragged item
        const newItems = prevItems.map(item =>
          item.id === active.id ? { ...item, parentId } : item
        );

        // If there's a nearest sibling, we need to reorder within that parent group
        if (nearestSibling) {
          // Get all items with the same parent (which could be null for root items)
          const siblingItems = newItems.filter(
            item => item.parentId === parentId
          );
          const otherItems = newItems.filter(
            item => item.parentId !== parentId
          );

          // Find positions of active and over items within sibling group
          const activeIndex = siblingItems.findIndex(
            item => item.id === active.id
          );
          let overIndex = siblingItems.findIndex(
            item => item.id === nearestSibling
          );

          // Adjust the drop position based on whether dragging above or below
          // When dropping below, increment the index to place after the target
          if (position === "below" && activeIndex > overIndex) {
            overIndex += 1;
          } else if (position === "above" && activeIndex < overIndex) {
            overIndex -= 1;
          }

          // Reorder siblings using array-move utility
          const reorderedSiblings = arrayMove(
            siblingItems,
            activeIndex,
            overIndex
          );

          // Combine the reordered siblings with the other items
          const result = [...otherItems, ...reorderedSiblings];

          // Notify parent component of changes
          if (onItemsChange) {
            onItemsChange(result);
          }

          return result;
        }

        // If no nearest sibling (becoming first child), simply use the new items array
        if (onItemsChange) {
          onItemsChange(newItems);
        }

        return newItems;
      });

      // Restore expanded state and clean up drag state
      setExpanded(expandedBeforeDrag);
      setDraggedItem(null);
      setOverId(null);
      setActiveId(null);
      setDragPosition(null);
    },
    [items, expanded, findDropTarget, dragPosition, onItemsChange]
  );
  // Get root items (items with no parent)
  const rootItems = items.filter(item => !item.parentId);

  if (!items || items.length === 0) {
    return <div className="p-4 text-neutral-weak">No items to display</div>;
  }

  // Draggable rendering with DnD Context
  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
      onDragMove={handleDragMove}
    >
      <SortableContext
        items={items.map(item => item.id)}
        strategy={verticalListSortingStrategy}
      >
        <div className="space-y-1">
          {rootItems.map(rootItem => (
            <SortableStep
              key={rootItem.id}
              step={rootItem}
              items={items}
              expanded={expanded}
              toggleExpand={toggleExpand}
              isDraggable={allowDrag}
              activeId={activeId}
              overId={overId}
              dragPosition={dragPosition}
            />
          ))}
        </div>
      </SortableContext>

      <DragOverlay>
        {draggedItem ? (
          <div className="rounded border border-neutral-weak bg-white p-3 shadow-md">
            <div className="flex items-center gap-2">
              <MdDragIndicator className="h-4 w-4 fill-neutral-weak" />
              <span className="text-sm">
                {draggedItem.title || `Step ${draggedItem.feedNumber}`}
              </span>
            </div>
          </div>
        ) : null}
      </DragOverlay>
    </DndContext>
  );
};

NestedAccordionSteps.propTypes = {
  allowDrag: PropTypes.bool,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      completed: PropTypes.bool,
      feedNumber: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      id: PropTypes.string.isRequired,
      isCondition: PropTypes.bool,
      parentId: PropTypes.string,
      status: PropTypes.string,
      title: PropTypes.string,
    })
  ).isRequired,
  onItemsChange: PropTypes.func,
};

export default NestedAccordionSteps;
