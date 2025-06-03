import React from 'react';
import PropTypes from 'prop-types';

import TruncateText from '../modules/TruncateText';

const EditingStaticElement = ({
  heading,
  wrapperClassName,
  isTruncateTooltip,
  tagName
}) => {
  const Element = tagName || 'h1';

  return isTruncateTooltip ? (
    <Element className={`${wrapperClassName}`} aria-label={heading}>
      <TruncateText
        hidetooltipTriggerIcon
        isFullWidthTooltip
        passTruncatedState={false}
        headerTooltipProps={{
          sideOffset: -6
        }}
        tooltipContent={
          <p className="px-4 text-neutral-inverse-weakest">{heading}</p>
        }
      >
        {heading}
      </TruncateText>
    </Element>
  ) : (
    <Element className={wrapperClassName}>{heading}</Element>
  );
};

EditingStaticElement.propTypes = {
  heading: PropTypes.string,
  isTruncateTooltip: PropTypes.bool,
  tagName: PropTypes.string,
  wrapperClassName: PropTypes.string
};
EditingStaticElement.defaultProps = {
  tagName: 'h1',
  heading: '',
  wrapperClassName: '',
  isTruncateTooltip: false
};

export default EditingStaticElement;
