import React from 'react';
import PropTypes from 'prop-types';

import LGImg from './assets/Light/LG.svg';

const DSILG = (props) => {
  const { alt } = props;
  return <img {...props} src={LGImg} alt={alt} />;
};

DSILG.propTypes = {
  alt: PropTypes.string
};

DSILG.defaultProps = {
  alt: 'LG logo'
};

export default DSILG;
