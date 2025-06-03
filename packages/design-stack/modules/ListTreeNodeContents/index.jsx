/**
 * @typedef {Object} ListTreeNodeContentsProps
 * @property {React.ReactNode} children? - Node containing the content that will be displayed within the indented child of ListTreeNode
 * @property {boolean} isTreeOpen? - Specify if the tree is open or not.This is to be used only when tree hide/show is to be controlled by the products business logic
 */

import React from "react";
import { Disclosure, Transition } from "@headlessui/react";
import PropTypes from "prop-types";

/**
 * @type {React.FC<ListTreeNodeContentsProps>}
 */
const ListTreeNodeContents = ({ children = null, isTreeOpen = undefined }) => (
  <Transition
    show={isTreeOpen}
    enter="transition duration-300 ease-out"
    enterFrom="transform scale-95 opacity-0"
    enterTo="transform scale-100 opacity-100"
    leave="transition duration-200 ease-out"
    leaveFrom="transform scale-100 opacity-100"
    leaveTo="transform scale-95 opacity-0"
  >
    <Disclosure.Panel static={isTreeOpen} role="group">
      {children}
    </Disclosure.Panel>
  </Transition>
);

ListTreeNodeContents.propTypes = {
  /** Node containing the content that will be displayed within the indented child of ListTreeNode */
  children: PropTypes.node,
  /** Specify if the tree is open or not.This is to be used only when tree hide/show is to be controlled by the products business logic */
  isTreeOpen: PropTypes.bool,
};

/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-listtree--controlled-tree
 * @zeroHeight https://zeroheight.com/023d5159d/p/08d92b-list-tree/b/4635b4
 * @end
 */

export default ListTreeNodeContents;
