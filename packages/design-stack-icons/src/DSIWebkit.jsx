import React from 'react';
import PropTypes from 'prop-types';

import WebkitImg from './assets/Light/Webkit.svg';

const DSIWebkit = (props) => {
  const { alt } = props;
  return <img {...props} src={WebkitImg} alt={alt} />;
};

DSIWebkit.propTypes = {
  alt: PropTypes.string
};

DSIWebkit.defaultProps = {
  alt: 'Webkit logo'
};

export default DSIWebkit;
