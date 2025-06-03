import React from 'react';
import PropTypes from 'prop-types';

import WerckerImg from './assets/Light/Wercker.svg';

const DSIWercker = (props) => {
  const { alt } = props;
  return <img {...props} src={WerckerImg} alt={alt} />;
};

DSIWercker.propTypes = {
  alt: PropTypes.string
};

DSIWercker.defaultProps = {
  alt: 'Wercker logo'
};

export default DSIWercker;
