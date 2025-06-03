import React from 'react';
import PropTypes from 'prop-types';

import ShippableImg from './assets/Light/Shippable.svg';

const DSIShippable = (props) => {
  const { alt } = props;
  return <img {...props} src={ShippableImg} alt={alt} />;
};

DSIShippable.propTypes = {
  alt: PropTypes.string
};

DSIShippable.defaultProps = {
  alt: 'Shippable logo'
};

export default DSIShippable;
