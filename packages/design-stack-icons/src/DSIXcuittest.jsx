import React from 'react';
import PropTypes from 'prop-types';

import XcuittestImg from './assets/Light/Xcuittest.svg';

const DSIXcuittest = (props) => {
  const { alt } = props;
  return <img {...props} src={XcuittestImg} alt={alt} />;
};

DSIXcuittest.propTypes = {
  alt: PropTypes.string
};

DSIXcuittest.defaultProps = {
  alt: 'Xcuittest logo'
};

export default DSIXcuittest;
