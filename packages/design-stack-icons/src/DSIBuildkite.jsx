import React from 'react';
import PropTypes from 'prop-types';

import BuildkiteImg from './assets/Light/Buildkite.svg';

const DSIBuildkite = (props) => {
  const { alt } = props;
  return <img {...props} src={BuildkiteImg} alt={alt} />;
};

DSIBuildkite.propTypes = {
  alt: PropTypes.string
};

DSIBuildkite.defaultProps = {
  alt: 'Buildkite logo'
};

export default DSIBuildkite;
