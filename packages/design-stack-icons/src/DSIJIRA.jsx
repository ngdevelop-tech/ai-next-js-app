import React from 'react';
import PropTypes from 'prop-types';

import JIRAImg from './assets/Light/JIRA.svg';

const DSIJIRA = (props) => {
  const { alt } = props;
  return <img {...props} src={JIRAImg} alt={alt} />;
};

DSIJIRA.propTypes = {
  alt: PropTypes.string
};

DSIJIRA.defaultProps = {
  alt: 'JIRA logo'
};

export default DSIJIRA;
