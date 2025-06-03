import React from 'react';
import PropTypes from 'prop-types';

import AppveyorImg from './assets/Light/Appveyor.svg';

const DSIAppveyor = (props) => {
  const { alt } = props;
  return <img {...props} src={AppveyorImg} alt={alt} />;
};

DSIAppveyor.propTypes = {
  alt: PropTypes.string
};

DSIAppveyor.defaultProps = {
  alt: 'Appveyor logo'
};

export default DSIAppveyor;
