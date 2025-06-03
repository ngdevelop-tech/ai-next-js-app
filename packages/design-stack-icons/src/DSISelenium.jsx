import React from 'react';
import PropTypes from 'prop-types';

import SeleniumImg from './assets/Light/Selenium.svg';

const DSISelenium = (props) => {
  const { alt } = props;
  return <img {...props} src={SeleniumImg} alt={alt} />;
};

DSISelenium.propTypes = {
  alt: PropTypes.string
};

DSISelenium.defaultProps = {
  alt: 'Selenium logo'
};

export default DSISelenium;
