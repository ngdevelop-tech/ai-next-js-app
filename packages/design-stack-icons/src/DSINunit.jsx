import React from 'react';
import PropTypes from 'prop-types';

import NunitImg from './assets/Light/Nunit.svg';

const DSINunit = (props) => {
  const { alt } = props;
  return <img {...props} src={NunitImg} alt={alt} />;
};

DSINunit.propTypes = {
  alt: PropTypes.string
};

DSINunit.defaultProps = {
  alt: 'Nunit logo'
};

export default DSINunit;
