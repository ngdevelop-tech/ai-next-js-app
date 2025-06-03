import React from 'react';
import PropTypes from 'prop-types';

import RubyImg from './assets/Light/Ruby.svg';

const DSIRuby = (props) => {
  const { alt } = props;
  return <img {...props} src={RubyImg} alt={alt} />;
};

DSIRuby.propTypes = {
  alt: PropTypes.string
};

DSIRuby.defaultProps = {
  alt: 'Ruby logo'
};

export default DSIRuby;
