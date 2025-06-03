import React from 'react';
import PropTypes from 'prop-types';

import SemaphoreImg from './assets/Light/Semaphore.svg';

const DSISemaphore = (props) => {
  const { alt } = props;
  return <img {...props} src={SemaphoreImg} alt={alt} />;
};

DSISemaphore.propTypes = {
  alt: PropTypes.string
};

DSISemaphore.defaultProps = {
  alt: 'Semaphore logo'
};

export default DSISemaphore;
