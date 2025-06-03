import React from 'react';
import PropTypes from 'prop-types';

import UbuntuImg from './assets/Light/Ubuntu.svg';

const DSIUbuntu = (props) => {
  const { alt } = props;
  return <img {...props} src={UbuntuImg} alt={alt} />;
};

DSIUbuntu.propTypes = {
  alt: PropTypes.string
};

DSIUbuntu.defaultProps = {
  alt: 'Ubuntu logo'
};

export default DSIUbuntu;
