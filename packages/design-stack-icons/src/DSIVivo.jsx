import React from 'react';
import PropTypes from 'prop-types';

import VivoImg from './assets/Light/Vivo.svg';

const DSIVivo = (props) => {
  const { alt } = props;
  return <img {...props} src={VivoImg} alt={alt} />;
};

DSIVivo.propTypes = {
  alt: PropTypes.string
};

DSIVivo.defaultProps = {
  alt: 'Vivo logo'
};

export default DSIVivo;
