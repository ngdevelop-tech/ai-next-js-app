import React from 'react';
import PropTypes from 'prop-types';

import BambooImg from './assets/Light/Bamboo.svg';

const DSIBamboo = (props) => {
  const { alt } = props;
  return <img {...props} src={BambooImg} alt={alt} />;
};

DSIBamboo.propTypes = {
  alt: PropTypes.string
};

DSIBamboo.defaultProps = {
  alt: 'Bamboo logo'
};

export default DSIBamboo;
