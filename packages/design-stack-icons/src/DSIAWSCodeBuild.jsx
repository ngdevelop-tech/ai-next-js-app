import React from 'react';
import PropTypes from 'prop-types';

import AWSCodeBuildImg from './assets/Light/AWSCodeBuild.svg';

const DSIAWSCodeBuild = (props) => {
  const { alt } = props;
  return <img {...props} src={AWSCodeBuildImg} alt={alt} />;
};

DSIAWSCodeBuild.propTypes = {
  alt: PropTypes.string
};

DSIAWSCodeBuild.defaultProps = {
  alt: 'AWSCodeBuild logo'
};

export default DSIAWSCodeBuild;
