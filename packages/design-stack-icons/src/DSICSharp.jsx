import React from 'react';
import PropTypes from 'prop-types';

import CSharpImg from './assets/Light/CSharp.svg';

const DSICSharp = (props) => {
  const { alt } = props;
  return <img {...props} src={CSharpImg} alt={alt} />;
};

DSICSharp.propTypes = {
  alt: PropTypes.string
};

DSICSharp.defaultProps = {
  alt: 'CSharp logo'
};

export default DSICSharp;
