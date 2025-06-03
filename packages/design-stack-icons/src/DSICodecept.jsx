import React from 'react';
import PropTypes from 'prop-types';

import CodeceptImg from './assets/Light/Codecept.svg';

const DSICodecept = (props) => {
  const { alt } = props;
  return <img {...props} src={CodeceptImg} alt={alt} />;
};

DSICodecept.propTypes = {
  alt: PropTypes.string
};

DSICodecept.defaultProps = {
  alt: 'Codecept logo'
};

export default DSICodecept;
