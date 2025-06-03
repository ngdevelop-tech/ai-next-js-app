import React from 'react';
import PropTypes from 'prop-types';

import NodeJSImg from './assets/Light/NodeJS.svg';

const DSINodeJS = (props) => {
  const { alt } = props;
  return <img {...props} src={NodeJSImg} alt={alt} />;
};

DSINodeJS.propTypes = {
  alt: PropTypes.string
};

DSINodeJS.defaultProps = {
  alt: 'NodeJS logo'
};

export default DSINodeJS;
