import React from 'react';
import PropTypes from 'prop-types';

import PlaywrightImg from './assets/Light/Playwright.svg';

const DSIPlaywright = (props) => {
  const { alt } = props;
  return <img {...props} src={PlaywrightImg} alt={alt} />;
};

DSIPlaywright.propTypes = {
  alt: PropTypes.string
};

DSIPlaywright.defaultProps = {
  alt: 'Playwright logo'
};

export default DSIPlaywright;
