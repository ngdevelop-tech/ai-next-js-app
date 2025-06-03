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
import React from "react";
declare const NestedAccordionSteps: {
    ({ items: initialItems, onItemsChange, any, allowDrag, any, }: any): React.ReactElement;
    propTypes: {
        allowDrag: any;
        items: any;
        onItemsChange: any;
    };
};
export default NestedAccordionSteps;
