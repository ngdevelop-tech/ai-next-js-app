import React from 'react';
import PropTypes from 'prop-types';

import { DATA_PROPTYPES } from '../../MultiSelect/constants/multiSelect';

import RenderIconAndText from './RenderIconAndText';
import RenderScrollOptionItem from './RenderScrollOptionItem';

function RenderScrollVariant({ data, selectedCategory, currentLevel }) {
  return (
    <div id={`device-series-${selectedCategory.id}`}>
      <div className="mb-2 flex items-center border-b border-neutral-default bg-raised-default p-2 font-semibold">
        <RenderIconAndText
          icon={selectedCategory.icon}
          title={selectedCategory.title}
        />
      </div>

      {data.map((option) => (
        <RenderScrollOptionItem
          key={option.id}
          option={option}
          currentLevel={currentLevel}
        />
      ))}
    </div>
  );
}

const RenderScrollVariantProps = {
  /** Current level number */
  currentLevel: PropTypes.number.isRequired,
  /** Available options */
  data: PropTypes.arrayOf(
    PropTypes.shape({
      ...DATA_PROPTYPES,
      subCategories: PropTypes.shape(DATA_PROPTYPES)
    })
  ).isRequired,
  /** Selected category of options */
  selectedCategory: PropTypes.shape(DATA_PROPTYPES).isRequired
};
RenderScrollVariant.propTypes = RenderScrollVariantProps;

export default RenderScrollVariant;
