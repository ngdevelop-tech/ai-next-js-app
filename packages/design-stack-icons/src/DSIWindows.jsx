import React from 'react';
import PropTypes from 'prop-types';

import WindowsImg from './assets/Light/Windows.svg';

const DSIWindows = (props) => {
  const { alt } = props;
  return <img {...props} src={WindowsImg} alt={alt} />;
};

DSIWindows.propTypes = {
  alt: PropTypes.string
};

DSIWindows.defaultProps = {
  alt: 'Windows logo'
};

export default DSIWindows;
