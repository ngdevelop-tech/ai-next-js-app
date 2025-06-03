import React from 'react';
import PropTypes from 'prop-types';

import TeamCityImg from './assets/Light/TeamCity.svg';

const DSITeamCity = (props) => {
  const { alt } = props;
  return <img {...props} src={TeamCityImg} alt={alt} />;
};

DSITeamCity.propTypes = {
  alt: PropTypes.string
};

DSITeamCity.defaultProps = {
  alt: 'TeamCity logo'
};

export default DSITeamCity;
