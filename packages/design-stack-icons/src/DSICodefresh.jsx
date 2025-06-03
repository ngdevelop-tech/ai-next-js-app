import React from 'react';
import PropTypes from 'prop-types';

import CodefreshImg from './assets/Light/Codefresh.svg';

const DSICodefresh = (props) => {
  const { alt } = props;
  return <img {...props} src={CodefreshImg} alt={alt} />;
};

DSICodefresh.propTypes = {
  alt: PropTypes.string
};

DSICodefresh.defaultProps = {
  alt: 'Codefresh logo'
};

export default DSICodefresh;
