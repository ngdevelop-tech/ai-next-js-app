export const findLastActionItem = (receivedValue, ourValue) => {
  let lastSelected;
  let lastDeselected;
  if (receivedValue.length > ourValue.length) {
    lastSelected = receivedValue.find((item) => !ourValue.includes(item));
  } else {
    lastDeselected = ourValue.find((item) => !receivedValue.includes(item));
  }
  return lastSelected || lastDeselected;
};

export const compareBy = (o, n) => {
  if (o && n) return o.value === n.value;
  return null;
};
