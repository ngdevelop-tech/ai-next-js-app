import React from 'react';
import PropTypes from 'prop-types';

import SlackImg from './assets/Light/Slack.svg';

const DSISlack = (props) => {
  const { alt } = props;
  return <img {...props} src={SlackImg} alt={alt} />;
};

DSISlack.propTypes = {
  alt: PropTypes.string
};

DSISlack.defaultProps = {
  alt: 'Slack logo'
};

export default DSISlack;
