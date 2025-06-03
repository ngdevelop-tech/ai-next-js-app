import React from 'react';
import PropTypes from 'prop-types';

import AzureImg from './assets/Light/Azure.svg';

const DSIAzure = (props) => {
  const { alt } = props;
  return <img {...props} src={AzureImg} alt={alt} />;
};

DSIAzure.propTypes = {
  alt: PropTypes.string
};

DSIAzure.defaultProps = {
  alt: 'Azure logo'
};

export default DSIAzure;
