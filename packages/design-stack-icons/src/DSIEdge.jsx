import React from 'react';
import PropTypes from 'prop-types';

import EdgeImg from './assets/Light/Edge.svg';

const DSIEdge = (props) => {
  const { alt } = props;
  return <img {...props} src={EdgeImg} alt={alt} />;
};

DSIEdge.propTypes = {
  alt: PropTypes.string
};

DSIEdge.defaultProps = {
  alt: 'Edge logo'
};

export default DSIEdge;
