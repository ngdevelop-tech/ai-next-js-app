import React from 'react';
import PropTypes from 'prop-types';

import HtcImg from './assets/Light/Htc.svg';

const DSIHtc = (props) => {
  const { alt } = props;
  return <img {...props} src={HtcImg} alt={alt} />;
};

DSIHtc.propTypes = {
  alt: PropTypes.string
};

DSIHtc.defaultProps = {
  alt: 'Htc logo'
};

export default DSIHtc;
