import React from 'react';
import PropTypes from 'prop-types';

import PythonImg from './assets/Light/Python.svg';

const DSIPython = (props) => {
  const { alt } = props;
  return <img {...props} src={PythonImg} alt={alt} />;
};

DSIPython.propTypes = {
  alt: PropTypes.string
};

DSIPython.defaultProps = {
  alt: 'Python logo'
};

export default DSIPython;
