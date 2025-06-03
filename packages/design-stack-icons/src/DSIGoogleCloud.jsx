import React from 'react';
import PropTypes from 'prop-types';

import GoogleCloudImg from './assets/Light/GoogleCloud.svg';

const DSIGoogleCloud = (props) => {
  const { alt } = props;
  return <img {...props} src={GoogleCloudImg} alt={alt} />;
};

DSIGoogleCloud.propTypes = {
  alt: PropTypes.string
};

DSIGoogleCloud.defaultProps = {
  alt: 'GoogleCloud logo'
};

export default DSIGoogleCloud;
