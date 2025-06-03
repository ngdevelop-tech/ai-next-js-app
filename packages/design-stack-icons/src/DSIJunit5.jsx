import React from 'react';
import PropTypes from 'prop-types';

import Junit5Img from './assets/Light/Junit-5.svg';

const DSIJunit5 = (props) => {
  const { alt } = props;
  return <img {...props} src={Junit5Img} alt={alt} />;
};

DSIJunit5.propTypes = {
  alt: PropTypes.string
};

DSIJunit5.defaultProps = {
  alt: 'Junit5 logo'
};

export default DSIJunit5;
