import React from 'react';
import PropTypes from 'prop-types';

import TruncateText from '../../TruncateText';

function RenderIconAndText({ icon = null, title, titleWrapperClassName = "" }) {
  return (
    <>
      {icon && <span className="mr-2">{icon}</span>}
      <TruncateText
        wrapperClassName={titleWrapperClassName}
        tooltipAriaLabel={title}
        hidetooltipTriggerIcon
      >
        {title}
      </TruncateText>
    </>
  );
}

const RenderIconAndTextProps = {
  /** Option icon */
  icon: PropTypes.node,
  /** Option title */
  title: PropTypes.node.isRequired,
  /** Option title classes */
  titleWrapperClassName: PropTypes.string
};
RenderIconAndText.propTypes = RenderIconAndTextProps;

export default RenderIconAndText;
