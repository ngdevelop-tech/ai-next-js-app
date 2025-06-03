import React from 'react';
import PropTypes from 'prop-types';

import OppoImg from './assets/Light/Oppo.svg';

const DSIOppo = (props) => {
  const { alt } = props;
  return <img {...props} src={OppoImg} alt={alt} />;
};

DSIOppo.propTypes = {
  alt: PropTypes.string
};

DSIOppo.defaultProps = {
  alt: 'Oppo logo'
};

export default DSIOppo;
