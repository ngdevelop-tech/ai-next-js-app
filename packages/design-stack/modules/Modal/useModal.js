import { useEffect } from 'react';

import { KEYBOARD_KEYS } from '../../shared/keyEnums';

const useModal = ({ show, onClose }) => {
  const targetNode = document.getElementById('root');

  if (targetNode) {
    const observer = new MutationObserver((mutationsList) => {
      mutationsList.forEach((mutation) => {
        if (
          mutation.type === 'attributes' &&
          mutation.attributeName === 'inert'
        ) {
          targetNode.removeAttribute('inert');
        }
      });
    });
    // Start observing the target node for attribute changes
    observer.observe(targetNode, { attributes: true });
  }
  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === KEYBOARD_KEYS.ESCAPE && show && onClose) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscapeKey);

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [show, onClose]);
};

export default useModal;
