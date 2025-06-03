import React from 'react';
import PropTypes from 'prop-types';

import SpecflowImg from './assets/Light/Specflow.svg';

const DSISpecflow = (props) => {
  const { alt } = props;
  return <img {...props} src={SpecflowImg} alt={alt} />;
};

DSISpecflow.propTypes = {
  alt: PropTypes.string
};

DSISpecflow.defaultProps = {
  alt: 'Specflow logo'
};

export default DSISpecflow;
