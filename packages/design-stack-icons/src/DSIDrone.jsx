import React from 'react';
import PropTypes from 'prop-types';

import DroneImg from './assets/Light/Drone.svg';

const DSIDrone = (props) => {
  const { alt } = props;
  return <img {...props} src={DroneImg} alt={alt} />;
};

DSIDrone.propTypes = {
  alt: PropTypes.string
};

DSIDrone.defaultProps = {
  alt: 'Drone logo'
};

export default DSIDrone;
