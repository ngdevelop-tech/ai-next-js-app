import React from 'react';
import PropTypes from 'prop-types';

import GithubActionsImg from './assets/Light/GithubActions.svg';

const DSIGithubActions = (props) => {
  const { alt } = props;
  return <img {...props} src={GithubActionsImg} alt={alt} />;
};

DSIGithubActions.propTypes = {
  alt: PropTypes.string
};

DSIGithubActions.defaultProps = {
  alt: 'GithubActions logo'
};

export default DSIGithubActions;
