export const mergeRefs =
  (...refs) =>
  (node) => {
    refs.forEach((ref) => {
      if (typeof ref === 'function') {
        // Handle function refs
        ref(node);
      } else if (ref && typeof ref === 'object') {
        // Handle object refs by ensuring immutability
        Object.assign(ref, { current: node });
      }
    });
  };
