import React from 'react';
import PropTypes from 'prop-types';

import OperaImg from './assets/Light/Opera.svg';

const DSIOpera = (props) => {
  const { alt } = props;
  return <img {...props} src={OperaImg} alt={alt} />;
};

DSIOpera.propTypes = {
  alt: PropTypes.string
};

DSIOpera.defaultProps = {
  alt: 'Opera logo'
};

export default DSIOpera;
