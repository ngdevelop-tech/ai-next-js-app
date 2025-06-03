import React from 'react';
import PropTypes from 'prop-types';

import SafariImg from './assets/Light/Safari.svg';

const DSISafari = (props) => {
  const { alt } = props;
  return <img {...props} src={SafariImg} alt={alt} />;
};

DSISafari.propTypes = {
  alt: PropTypes.string
};

DSISafari.defaultProps = {
  alt: 'Safari logo'
};

export default DSISafari;
