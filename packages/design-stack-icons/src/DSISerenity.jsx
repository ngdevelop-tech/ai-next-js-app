import React from 'react';
import PropTypes from 'prop-types';

import SerenityImg from './assets/Light/Serenity.svg';

const DSISerenity = (props) => {
  const { alt } = props;
  return <img {...props} src={SerenityImg} alt={alt} />;
};

DSISerenity.propTypes = {
  alt: PropTypes.string
};

DSISerenity.defaultProps = {
  alt: 'Serenity logo'
};

export default DSISerenity;
