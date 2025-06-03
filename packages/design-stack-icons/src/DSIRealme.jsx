import React from 'react';
import PropTypes from 'prop-types';

import RealmeImg from './assets/Light/Realme.svg';

const DSIRealme = (props) => {
  const { alt } = props;
  return <img {...props} src={RealmeImg} alt={alt} />;
};

DSIRealme.propTypes = {
  alt: PropTypes.string
};

DSIRealme.defaultProps = {
  alt: 'Realme logo'
};

export default DSIRealme;
