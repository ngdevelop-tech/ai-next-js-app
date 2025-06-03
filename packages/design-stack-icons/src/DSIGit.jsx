import React from 'react';
import PropTypes from 'prop-types';

import GitImg from './assets/Light/Git.svg';

const DSIGit = (props) => {
  const { alt } = props;
  return <img {...props} src={GitImg} alt={alt} />;
};

DSIGit.propTypes = {
  alt: PropTypes.string
};

DSIGit.defaultProps = {
  alt: 'Git logo'
};

export default DSIGit;
