import React from 'react';
import PropTypes from 'prop-types';

import ChromeImg from './assets/Light/Chrome.svg';

const DSIChrome = (props) => {
  const { alt } = props;
  return <img {...props} src={ChromeImg} alt={alt} />;
};

DSIChrome.propTypes = {
  alt: PropTypes.string
};

DSIChrome.defaultProps = {
  alt: 'Chrome logo'
};

export default DSIChrome;
