export const isWithinRange = (minRange, maxRange, number) =>
  number >= minRange.value && number <= maxRange.value;

export const closestMultipleOfStep = (number, step, minValue) => {
  const standardNumber = number - minValue;
  const multiple = Math.round(standardNumber / step) * step;
  return multiple + minValue;
};
