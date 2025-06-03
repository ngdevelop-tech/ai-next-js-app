import React from 'react';
import PropTypes from 'prop-types';

import PHPImg from './assets/Light/PHP.svg';

const DSIPHP = (props) => {
  const { alt } = props;
  return <img {...props} src={PHPImg} alt={alt} />;
};

DSIPHP.propTypes = {
  alt: PropTypes.string
};

DSIPHP.defaultProps = {
  alt: 'PHP logo'
};

export default DSIPHP;
