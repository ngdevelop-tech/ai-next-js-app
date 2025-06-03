import React from 'react';
import PropTypes from 'prop-types';

import ChromiumImg from './assets/Light/Chromium.svg';

const DSIChromium = (props) => {
  const { alt } = props;
  return <img {...props} src={ChromiumImg} alt={alt} />;
};

DSIChromium.propTypes = {
  alt: PropTypes.string
};

DSIChromium.defaultProps = {
  alt: 'Chromium logo'
};

export default DSIChromium;
