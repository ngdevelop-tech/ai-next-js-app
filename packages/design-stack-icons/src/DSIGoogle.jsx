import React from 'react';
import PropTypes from 'prop-types';

import GoogleImg from './assets/Light/Google.svg';

const DSIGoogle = (props) => {
  const { alt } = props;
  return <img {...props} src={GoogleImg} alt={alt} />;
};

DSIGoogle.propTypes = {
  alt: PropTypes.string
};

DSIGoogle.defaultProps = {
  alt: 'Google logo'
};

export default DSIGoogle;
