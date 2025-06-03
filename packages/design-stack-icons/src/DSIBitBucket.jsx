import React from 'react';
import PropTypes from 'prop-types';

import BitBucketImg from './assets/Light/BitBucket.svg';

const DSIBitBucket = (props) => {
  const { alt } = props;
  return <img {...props} src={BitBucketImg} alt={alt} />;
};

DSIBitBucket.propTypes = {
  alt: PropTypes.string
};

DSIBitBucket.defaultProps = {
  alt: 'BitBucket logo'
};

export default DSIBitBucket;
