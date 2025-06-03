import React from 'react';
import PropTypes from 'prop-types';

import LogstashImg from './assets/Light/Logstash.svg';

const DSILogstash = (props) => {
  const { alt } = props;
  return <img {...props} src={LogstashImg} alt={alt} />;
};

DSILogstash.propTypes = {
  alt: PropTypes.string
};

DSILogstash.defaultProps = {
  alt: 'Logstash logo'
};

export default DSILogstash;
