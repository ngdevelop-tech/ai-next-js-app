import React from 'react';
import PropTypes from 'prop-types';

import OnePlusImg from './assets/Light/OnePlus.svg';

const DSIOnePlus = (props) => {
  const { alt } = props;
  return <img {...props} src={OnePlusImg} alt={alt} />;
};

DSIOnePlus.propTypes = {
  alt: PropTypes.string
};

DSIOnePlus.defaultProps = {
  alt: 'OnePlus logo'
};

export default DSIOnePlus;
