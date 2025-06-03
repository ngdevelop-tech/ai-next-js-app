import React from 'react';
import PropTypes from 'prop-types';

import LinuxImg from './assets/Light/Linux.svg';

const DSILinux = (props) => {
  const { alt } = props;
  return <img {...props} src={LinuxImg} alt={alt} />;
};

DSILinux.propTypes = {
  alt: PropTypes.string
};

DSILinux.defaultProps = {
  alt: 'Linux logo'
};

export default DSILinux;
