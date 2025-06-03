import React from 'react';
import PropTypes from 'prop-types';

import JavaImg from './assets/Light/Java.svg';

const DSIJava = (props) => {
  const { alt } = props;
  return <img {...props} src={JavaImg} alt={alt} />;
};

DSIJava.propTypes = {
  alt: PropTypes.string
};

DSIJava.defaultProps = {
  alt: 'Java logo'
};

export default DSIJava;
