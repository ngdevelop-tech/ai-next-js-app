import PropTypes from 'prop-types';

import useGetFocusElementsAndTrap from './useGetFocusElementsAndTrap';

const GetFocusElementsAndTrap = ({ parentRef, reTrapFocus }) => {
  useGetFocusElementsAndTrap(parentRef, reTrapFocus);
  return null;
};

GetFocusElementsAndTrap.propTypes = {
  parentRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) })
  ]).isRequired,
  reTrapFocus: PropTypes.shape({
    shouldReTrapFocus: PropTypes.bool,
    shouldFocusFirstElement: PropTypes.bool
  })
};

GetFocusElementsAndTrap.defaultProps = {
  reTrapFocus: { shouldReTrapFocus: false, shouldFocusFirstElement: false }
};

export default GetFocusElementsAndTrap;
