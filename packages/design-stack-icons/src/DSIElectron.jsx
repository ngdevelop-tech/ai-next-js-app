import React from 'react';
import PropTypes from 'prop-types';

import ElectronImg from './assets/Light/Electron.svg';

const DSIElectron = (props) => {
  const { alt } = props;
  return <img {...props} src={ElectronImg} alt={alt} />;
};

DSIElectron.propTypes = {
  alt: PropTypes.string
};

DSIElectron.defaultProps = {
  alt: 'Electron logo'
};

export default DSIElectron;
