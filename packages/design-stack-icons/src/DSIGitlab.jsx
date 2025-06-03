import React from 'react';
import PropTypes from 'prop-types';

import GitlabImg from './assets/Light/Gitlab.svg';

const DSIGitlab = (props) => {
  const { alt } = props;
  return <img {...props} src={GitlabImg} alt={alt} />;
};

DSIGitlab.propTypes = {
  alt: PropTypes.string
};

DSIGitlab.defaultProps = {
  alt: 'Gitlab logo'
};

export default DSIGitlab;
