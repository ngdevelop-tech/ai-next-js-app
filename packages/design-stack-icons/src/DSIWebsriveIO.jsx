import React from 'react';
import PropTypes from 'prop-types';

import WebsriveIOImg from './assets/Light/WebsriveIO.svg';

const DSIWebsriveIO = (props) => {
  const { alt } = props;
  return <img {...props} src={WebsriveIOImg} alt={alt} />;
};

DSIWebsriveIO.propTypes = {
  alt: PropTypes.string
};

DSIWebsriveIO.defaultProps = {
  alt: 'WebsriveIO logo'
};

export default DSIWebsriveIO;
