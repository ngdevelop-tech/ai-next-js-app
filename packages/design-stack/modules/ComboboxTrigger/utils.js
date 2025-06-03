export const renderSingleOptions = (opts) => {
  if (opts) return opts?.label;
  return null;
};

export const renderMultiOptions = (opts, keysToBeIgnored) => {
  if (opts.length)
    return opts
      ?.filter((el) => !keysToBeIgnored.includes(el.value))
      .map((p) => p.label)
      .join(', ');
  return null;
};

export const getHoveredClasses = (isHovered, disabled) => {
  if (isHovered && !disabled) return 'bg-neutral-default-hover';
  return '';
};
