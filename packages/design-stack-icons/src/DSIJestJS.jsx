import React from 'react';
import PropTypes from 'prop-types';

import JestJSImg from './assets/Light/JestJS.svg';

const DSIJestJS = (props) => {
  const { alt } = props;
  return <img {...props} src={JestJSImg} alt={alt} />;
};

DSIJestJS.propTypes = {
  alt: PropTypes.string
};

DSIJestJS.defaultProps = {
  alt: 'JestJS logo'
};

export default DSIJestJS;
