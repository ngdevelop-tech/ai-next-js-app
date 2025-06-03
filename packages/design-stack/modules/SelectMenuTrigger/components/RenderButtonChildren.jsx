/**
 * @typedef {Object} RenderButtonChildrenProps
 * @property {boolean} truncated?
 */

import React, { useContext, useEffect } from "react";
import PropTypes from "prop-types";

import { requireAtleastOneProp } from "../../../shared/requireAtleastOneProp";
import { SelectMenuContextData } from "../../SelectMenu/selectMenuContext";
import { renderMultiOptions, renderSingleOptions } from "../utils";

/**
 * @type {React.FC<RenderButtonChildrenProps>}
 */
const RenderButtonChildren = ({ placeholder, truncated, value }) => {
  const { setShowCount, isMulti, errorText } = useContext(
    SelectMenuContextData
  );

  useEffect(() => {
    setShowCount(truncated);
  }, [truncated, setShowCount]);

  return (
    <>
      {isMulti && Array.isArray(value)
        ? renderMultiOptions(value, placeholder, errorText)
        : renderSingleOptions(value, placeholder, errorText)}
    </>
  );
};

const requiredPropsCheck = requireAtleastOneProp({
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        value: PropTypes.number,
      })
    ),
    PropTypes.shape({
      label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    }),
  ]),
});

RenderButtonChildren.propTypes = {
  placeholder: requiredPropsCheck,
  truncated: PropTypes.bool,
  value: requiredPropsCheck,
};

RenderButtonChildren.defaultProps = {
  value: null,
  placeholder: null,
  truncated: null,
};

export default RenderButtonChildren;
