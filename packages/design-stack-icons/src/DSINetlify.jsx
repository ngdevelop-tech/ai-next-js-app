import React from 'react';
import PropTypes from 'prop-types';

import NetlifyImg from './assets/Light/Netlify.svg';

const DSINetlify = (props) => {
  const { alt } = props;
  return <img {...props} src={NetlifyImg} alt={alt} />;
};

DSINetlify.propTypes = {
  alt: PropTypes.string
};

DSINetlify.defaultProps = {
  alt: 'Netlify logo'
};

export default DSINetlify;
