import React from 'react';
import PropTypes from 'prop-types';

import CodeshipImg from './assets/Light/Codeship.svg';

const DSICodeship = (props) => {
  const { alt } = props;
  return <img {...props} src={CodeshipImg} alt={alt} />;
};

DSICodeship.propTypes = {
  alt: PropTypes.string
};

DSICodeship.defaultProps = {
  alt: 'Codeship logo'
};

export default DSICodeship;
