import React from 'react';
import PropTypes from 'prop-types';

import JenkinsImg from './assets/Light/Jenkins.svg';

const DSIJenkins = (props) => {
  const { alt } = props;
  return <img {...props} src={JenkinsImg} alt={alt} />;
};

DSIJenkins.propTypes = {
  alt: PropTypes.string
};

DSIJenkins.defaultProps = {
  alt: 'Jenkins logo'
};

export default DSIJenkins;
