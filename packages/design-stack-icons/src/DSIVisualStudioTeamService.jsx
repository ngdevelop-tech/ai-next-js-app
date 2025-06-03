import React from 'react';
import PropTypes from 'prop-types';

import VisualStudioTeamServiceImg from './assets/Light/VisualStudioTeamService.svg';

const DSIVisualStudioTeamService = (props) => {
  const { alt } = props;
  return <img {...props} src={VisualStudioTeamServiceImg} alt={alt} />;
};

DSIVisualStudioTeamService.propTypes = {
  alt: PropTypes.string
};

DSIVisualStudioTeamService.defaultProps = {
  alt: 'VisualStudioTeamService logo'
};

export default DSIVisualStudioTeamService;
