import React from 'react';
import PropTypes from 'prop-types';

const DragFolderIcon = ({ iconClass }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="currentColor"
    className={iconClass}
  >
    <path
      d="M8.33333 3.33331H3.33333C2.41666 3.33331 1.675 4.08331 1.675 4.99998L1.66666 15C1.66666 15.9166 2.41666 16.6666 3.33333 16.6666H16.6667C17.5833 16.6666 18.3333 15.9166 18.3333 15V6.66665C18.3333 5.74998 17.5833 4.99998 16.6667 4.99998H10L8.33333 3.33331Z"
      fill="#38BDF8"
    />
    <rect
      x="12.775"
      y="5.54999"
      width="10.2177"
      height="10.2177"
      transform="rotate(45 12.775 5.54999)"
      fill="white"
    />
    <path
      d="M12.775 18.696L10.2635 16.1846L11.1056 15.3425L12.1841 16.4209V13.3777H9.15556L10.234 14.4413L9.37715 15.2982L6.86571 12.7867L9.36238 10.2901L10.2045 11.1321L9.14078 12.1958H12.1841V9.15252L11.1056 10.231L10.2635 9.38889L12.775 6.87744L15.2864 9.38889L14.4444 10.231L13.3659 9.15252V12.1958H16.3944L15.316 11.1321L16.1728 10.2753L18.6843 12.7867L16.1728 15.2982L15.3308 14.4561L16.4092 13.3777H13.3659V16.4062L14.4296 15.3277L15.2864 16.1846L12.775 18.696Z"
      fill="#0369A1"
    />
  </svg>
);

DragFolderIcon.propTypes = {
  iconClass: PropTypes.string
};
DragFolderIcon.defaultProps = {
  iconClass: ''
};

export default DragFolderIcon;
