import React from 'react';
import PropTypes from 'prop-types';

import VisualStudioImg from './assets/Light/VisualStudio.svg';

const DSIVisualStudio = (props) => {
  const { alt } = props;
  return <img {...props} src={VisualStudioImg} alt={alt} />;
};

DSIVisualStudio.propTypes = {
  alt: PropTypes.string
};

DSIVisualStudio.defaultProps = {
  alt: 'VisualStudio logo'
};

export default DSIVisualStudio;
