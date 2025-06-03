import PropTypes from 'prop-types';

export const MULTISELECT_TYPES = {
  DEFAULT: 'default',
  ADVANCED_SELECTOR: 'advanced-selector'
};

export const DATA_PROPTYPES = {
  actionIcons: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.node.isRequired,
      value: PropTypes.string.isRequired
    })
  ),
  details: PropTypes.node,
  icon: PropTypes.node,
  id: PropTypes.string.isRequired,
  hasScrollHelper: PropTypes.bool,
  title: PropTypes.string.isRequired,
  triggerIcon: PropTypes.node,
  triggerLabel: PropTypes.string
};
