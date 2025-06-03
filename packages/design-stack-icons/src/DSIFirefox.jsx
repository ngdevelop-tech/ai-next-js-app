import React from 'react';
import PropTypes from 'prop-types';

import FirefoxImg from './assets/Light/Firefox.svg';

const DSIFirefox = (props) => {
  const { alt } = props;
  return <img {...props} src={FirefoxImg} alt={alt} />;
};

DSIFirefox.propTypes = {
  alt: PropTypes.string
};

DSIFirefox.defaultProps = {
  alt: 'Firefox logo'
};

export default DSIFirefox;
