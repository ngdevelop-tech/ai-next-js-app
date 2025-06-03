import React from 'react';
import PropTypes from 'prop-types';

import JavaScriptImg from './assets/Light/JavaScript.svg';

const DSIJavaScript = (props) => {
  const { alt } = props;
  return <img {...props} src={JavaScriptImg} alt={alt} />;
};

DSIJavaScript.propTypes = {
  alt: PropTypes.string
};

DSIJavaScript.defaultProps = {
  alt: 'JavaScript logo'
};

export default DSIJavaScript;
