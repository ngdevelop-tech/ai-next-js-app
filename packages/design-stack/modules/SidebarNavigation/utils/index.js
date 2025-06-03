// util to get avatar initials from the text
export const getAvatarInitials = (labelText) => {
  // Remove leading and trailing whitespace
  const value = labelText.trim();

  // Split the value into words
  const words = value.split(/\s+/);

  // Initialize initials variable
  let initials = '';

  // Extract initials based on the number of words
  if (words.length === 1) {
    // If there is just one word, use the first character as initial
    initials = words[0].charAt(0);
  } else {
    // If there are more than two words, use the first character of first and last word as initials
    initials = words[0].charAt(0) + words[words.length - 1].charAt(0);
  }

  // Convert initials to uppercase
  initials = initials.toUpperCase();

  // Return the generated initials
  return initials;
};
