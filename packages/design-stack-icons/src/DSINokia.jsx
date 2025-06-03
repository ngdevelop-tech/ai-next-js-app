import React from 'react';
import PropTypes from 'prop-types';

import NokiaImg from './assets/Light/Nokia.svg';

const DSINokia = (props) => {
  const { alt } = props;
  return <img {...props} src={NokiaImg} alt={alt} />;
};

DSINokia.propTypes = {
  alt: PropTypes.string
};

DSINokia.defaultProps = {
  alt: 'Nokia logo'
};

export default DSINokia;
