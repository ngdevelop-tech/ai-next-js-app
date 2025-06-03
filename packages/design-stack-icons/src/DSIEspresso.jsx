import React from 'react';
import PropTypes from 'prop-types';

import EspressoImg from './assets/Light/Espresso.svg';

const DSIEspresso = (props) => {
  const { alt } = props;
  return <img {...props} src={EspressoImg} alt={alt} />;
};

DSIEspresso.propTypes = {
  alt: PropTypes.string
};

DSIEspresso.defaultProps = {
  alt: 'Espresso logo'
};

export default DSIEspresso;
