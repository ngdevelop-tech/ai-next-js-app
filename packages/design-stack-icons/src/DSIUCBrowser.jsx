import React from 'react';
import PropTypes from 'prop-types';

import UCBrowserImg from './assets/Light/UCBrowser.svg';

const DSIUCBrowser = (props) => {
  const { alt } = props;
  return <img {...props} src={UCBrowserImg} alt={alt} />;
};

DSIUCBrowser.propTypes = {
  alt: PropTypes.string
};

DSIUCBrowser.defaultProps = {
  alt: 'UCBrowser logo'
};

export default DSIUCBrowser;
