import React from 'react';
import PropTypes from 'prop-types';

import MochaJSImg from './assets/Light/MochaJS.svg';

const DSIMochaJS = (props) => {
  const { alt } = props;
  return <img {...props} src={MochaJSImg} alt={alt} />;
};

DSIMochaJS.propTypes = {
  alt: PropTypes.string
};

DSIMochaJS.defaultProps = {
  alt: 'MochaJS logo'
};

export default DSIMochaJS;
