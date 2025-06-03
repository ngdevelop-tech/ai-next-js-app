import React from 'react';
import PropTypes from 'prop-types';

import JiraArrowImg from './assets/Light/JiraArrow.svg';

const DSIJiraArrow = (props) => {
  const { alt } = props;
  return <img {...props} src={JiraArrowImg} alt={alt} />;
};

DSIJiraArrow.propTypes = {
  alt: PropTypes.string
};

DSIJiraArrow.defaultProps = {
  alt: 'JiraArrow logo'
};

export default DSIJiraArrow;
