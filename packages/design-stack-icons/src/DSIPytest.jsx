import React from 'react';
import PropTypes from 'prop-types';

import PytestImg from './assets/Light/Pytest.svg';

const DSIPytest = (props) => {
  const { alt } = props;
  return <img {...props} src={PytestImg} alt={alt} />;
};

DSIPytest.propTypes = {
  alt: PropTypes.string
};

DSIPytest.defaultProps = {
  alt: 'Pytest logo'
};

export default DSIPytest;
