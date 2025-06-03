import { useEffect, useState } from 'react';

export default function useIsDarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(
    document?.body?.classList?.contains('dark') || false
  );

  const observeBodyForDarkMode = () => {
    // Select the node that will be observed for mutations
    const targetNode = document.body;

    // Options for the observer (which mutations to observe)
    const config = { attributes: true };

    // Callback function to execute when mutations are observed
    const callback = (mutationList) => {
      mutationList.forEach((mutation) => {
        if (mutation.type === 'attributes') {
          setIsDarkMode(targetNode.classList.contains('dark'));
        }
      });
    };

    // Create an observer instance linked to the callback function
    const observer = new MutationObserver(callback);

    // Start observing the target node for configured mutations
    observer.observe(targetNode, config);

    return observer;
  };
  useEffect(() => {
    const observer = observeBodyForDarkMode();
    return () => observer.disconnect();
  }, []);
  return { isDarkMode };
}
