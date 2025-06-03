import React from 'react';
import PropTypes from 'prop-types';

import MIImg from './assets/Light/MI.svg';

const DSIMI = (props) => {
  const { alt } = props;
  return <img {...props} src={MIImg} alt={alt} />;
};

DSIMI.propTypes = {
  alt: PropTypes.string
};

DSIMI.defaultProps = {
  alt: 'MI logo'
};

export default DSIMI;
