import PropTypes from 'prop-types';

export const STATS_VARIANTS = {
  WITH_ICON: 'withIcon',
  WITHOUT_ICON: 'withoutIcon',
  SIMPLE: 'simple',
  KPI_VARIANT: 'kpi_variant',
  GRAPH_VARIANT: 'graph_variant'
};
export const STATS_INC = 'increase';
export const STATS_DEC = 'decrease';

export const COMMON_WRAPPER_CLASSES = 'py-5 sm:py-6';

export const STATS_WRAPPER_CLASSES = {
  [STATS_VARIANTS.WITH_ICON]: 'py-10 sm:py-10',
  [STATS_VARIANTS.WITHOUT_ICON]: COMMON_WRAPPER_CLASSES,
  [STATS_VARIANTS.SIMPLE]: COMMON_WRAPPER_CLASSES,
  [STATS_VARIANTS.KPI_VARIANT]: COMMON_WRAPPER_CLASSES,
  [STATS_VARIANTS.GRAPH_VARIANT]: 'py-4'
};

const COMMON_OPTION_NAME_CLASSES = 'text-sm font-medium text-neutral-weaker';

export const STATS_OPTION_CLASSES = {
  [STATS_VARIANTS.WITH_ICON]: 'ml-16 font-medium text-sm text-neutral-weaker',
  [STATS_VARIANTS.WITHOUT_ICON]: 'font-normal text-base text-neutral-default',
  [STATS_VARIANTS.SIMPLE]: COMMON_OPTION_NAME_CLASSES,
  [STATS_VARIANTS.KPI_VARIANT]: COMMON_OPTION_NAME_CLASSES,
  [STATS_VARIANTS.GRAPH_VARIANT]: COMMON_OPTION_NAME_CLASSES
};

export const VARIANTS_PROPTYPES = {
  /** Determines whether the digits in the component should be displayed using a monospaced font */
  monospacedDigits: PropTypes.bool.isRequired,
  /** An object containing data related to the stat card */
  option: PropTypes.shape({
    change: PropTypes.string,
    changeType: PropTypes.oneOf([STATS_INC, STATS_DEC]),
    graph: PropTypes.node,
    icon: PropTypes.node,
    iconContainerWrapperClass: PropTypes.string,
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    link: PropTypes.node,
    linkText: PropTypes.string,
    menuDropdown: PropTypes.node,
    name: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
    onClick: PropTypes.func,
    stat: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
    statSubText: PropTypes.string
  }).isRequired,
  /** A custom CSS color value to style the text color of the stat value in option */
  textColor: PropTypes.string.isRequired
};
