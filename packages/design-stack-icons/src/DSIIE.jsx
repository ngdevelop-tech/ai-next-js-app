import React from 'react';
import PropTypes from 'prop-types';

import IEImg from './assets/Light/IE.svg';

const DSIIE = (props) => {
  const { alt } = props;
  return <img {...props} src={IEImg} alt={alt} />;
};

DSIIE.propTypes = {
  alt: PropTypes.string
};

DSIIE.defaultProps = {
  alt: 'IE logo'
};

export default DSIIE;
