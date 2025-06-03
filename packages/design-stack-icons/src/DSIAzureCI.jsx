import React from 'react';
import PropTypes from 'prop-types';

import AzureCIImg from './assets/Light/AzureCI.svg';

const DSIAzureCI = (props) => {
  const { alt } = props;
  return <img {...props} src={AzureCIImg} alt={alt} />;
};

DSIAzureCI.propTypes = {
  alt: PropTypes.string
};

DSIAzureCI.defaultProps = {
  alt: 'AzureCI logo'
};

export default DSIAzureCI;
