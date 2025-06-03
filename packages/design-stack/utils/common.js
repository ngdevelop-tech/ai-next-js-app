export const printToConsole = (method, ...args) => {
  const { console } = window;
  const canPrint = console && console[method];
  if (canPrint) {
    console[method](...args);
  }
};

export const getAllFocusableElements = (element, selector) => {
  const querySelectorToTargetFocusableElements = selector;
  if (!element) {
    return [null];
  }
  return element.querySelectorAll(querySelectorToTargetFocusableElements);
};
