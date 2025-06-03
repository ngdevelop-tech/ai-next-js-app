import React from 'react';
import PropTypes from 'prop-types';

import TravisImg from './assets/Light/Travis.svg';

const DSITravis = (props) => {
  const { alt } = props;
  return <img {...props} src={TravisImg} alt={alt} />;
};

DSITravis.propTypes = {
  alt: PropTypes.string
};

DSITravis.defaultProps = {
  alt: 'Travis logo'
};

export default DSITravis;
