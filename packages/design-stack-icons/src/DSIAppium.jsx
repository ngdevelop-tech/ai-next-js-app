import React from 'react';
import PropTypes from 'prop-types';

import AppiumImg from './assets/Light/Appium.svg';

const DSIAppium = (props) => {
  const { alt } = props;
  return <img {...props} src={AppiumImg} alt={alt} />;
};

DSIAppium.propTypes = {
  alt: PropTypes.string
};

DSIAppium.defaultProps = {
  alt: 'Appium logo'
};

export default DSIAppium;
