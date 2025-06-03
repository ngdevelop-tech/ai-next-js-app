/**
 * @typedef {Object} ListFeedStepsProviderProps
 * @property {React.ReactNode} children
 * @property {Record<string, any>} value?
 */

import React, { createContext } from "react";
import PropTypes from "prop-types";

export const ListFeedStepsContext = createContext(null);

export const ListFeedStepsProvider = ({ children, value }) => (
  <ListFeedStepsContext.Provider value={value}>
    {children}
  </ListFeedStepsContext.Provider>
);

ListFeedStepsProvider.propTypes = {
  children: PropTypes.node.isRequired,
  value: PropTypes.shape({}).isRequired,
};
