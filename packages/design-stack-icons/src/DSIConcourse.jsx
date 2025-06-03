import React from 'react';
import PropTypes from 'prop-types';

import ConcourseImg from './assets/Light/Concourse.svg';

const DSIConcourse = (props) => {
  const { alt } = props;
  return <img {...props} src={ConcourseImg} alt={alt} />;
};

DSIConcourse.propTypes = {
  alt: PropTypes.string
};

DSIConcourse.defaultProps = {
  alt: 'Concourse logo'
};

export default DSIConcourse;
