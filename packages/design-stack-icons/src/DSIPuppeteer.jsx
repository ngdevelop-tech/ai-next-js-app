import React from 'react';
import PropTypes from 'prop-types';

import PuppeteerImg from './assets/Light/Puppeteer.svg';

const DSIPuppeteer = (props) => {
  const { alt } = props;
  return <img {...props} src={PuppeteerImg} alt={alt} />;
};

DSIPuppeteer.propTypes = {
  alt: PropTypes.string
};

DSIPuppeteer.defaultProps = {
  alt: 'Puppeteer logo'
};

export default DSIPuppeteer;
