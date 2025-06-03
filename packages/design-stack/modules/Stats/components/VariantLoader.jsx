import React from 'react';

import { STATS_VARIANTS, VARIANTS_PROPTYPES } from '../constants/stats';

import GraphVariant from './GraphVariant';
import KpiVariant from './KpiVariant';
import Simple from './Simple';
import StatsWithIcon from './StatsWithIcon';
import StatsWithoutIcon from './StatsWithoutIcon';

function VariantLoader({ monospacedDigits, option, textColor, variant }) {
  const COMMON_PROPS = { option, monospacedDigits, textColor };

  const renderDynamicComponent = () => {
    switch (variant) {
      case STATS_VARIANTS.WITH_ICON:
        return <StatsWithIcon {...COMMON_PROPS} />;
      case STATS_VARIANTS.WITHOUT_ICON:
        return <StatsWithoutIcon {...COMMON_PROPS} />;
      case STATS_VARIANTS.GRAPH_VARIANT:
        return <GraphVariant {...COMMON_PROPS} />;
      case STATS_VARIANTS.SIMPLE:
        return <Simple {...COMMON_PROPS} />;
      case STATS_VARIANTS.KPI_VARIANT:
        return <KpiVariant {...COMMON_PROPS} />;
      default:
        return null;
    }
  };

  return renderDynamicComponent();
}

VariantLoader.propTypes = VARIANTS_PROPTYPES;

export default VariantLoader;
