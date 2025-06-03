import React from 'react';
import PropTypes from 'prop-types';

import NightwatchJSImg from './assets/Light/NightwatchJS.svg';

const DSINightwatchJS = (props) => {
  const { alt } = props;
  return <img {...props} src={NightwatchJSImg} alt={alt} />;
};

DSINightwatchJS.propTypes = {
  alt: PropTypes.string
};

DSINightwatchJS.defaultProps = {
  alt: 'NightwatchJS logo'
};

export default DSINightwatchJS;
