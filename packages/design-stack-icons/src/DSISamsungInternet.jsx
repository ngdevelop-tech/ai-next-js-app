import React from 'react';
import PropTypes from 'prop-types';

import SamsungInternetImg from './assets/Light/SamsungInternet.svg';

const DSISamsungInternet = (props) => {
  const { alt } = props;
  return <img {...props} src={SamsungInternetImg} alt={alt} />;
};

DSISamsungInternet.propTypes = {
  alt: PropTypes.string
};

DSISamsungInternet.defaultProps = {
  alt: 'SamsungInternet logo'
};

export default DSISamsungInternet;
