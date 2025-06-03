function getSeperateVariables(style) {
  const tokens = {
    colors: {},
    bg: {},
    text: {},
    surface: {},
    border: {},
    icon: {},
    chart: {}
  };

  for (let k = 0; k < style.length; k += 1) {
    const propertyName = style[k];
    if (propertyName.startsWith('--')) {
      const tokenKey = propertyName.slice(2);
      const tokenName = tokenKey.split('-')[0];

      if (tokens[tokenName]) {
        let propertyValue = style.getPropertyValue(propertyName);
        if (!(propertyValue[0] === '#'))
          propertyValue = propertyValue
            .substring(
              propertyValue.indexOf('(') + 1,
              propertyValue.indexOf(')')
            )
            .slice(2);
        tokens[tokenName][tokenKey] = propertyValue.trim();
      }
    }
  }
  return tokens;
}

export function getCssVariables(selectorText) {
  let colorTokens = {};
  let tokens = {};
  const { styleSheets } = document;
  const regex = /\btailwind\b/i;

  // Why 2?
  // The first (styleSheets[0]) contains Storybook styles.
  // The second (styleSheets[1]) contains some inline styles.
  // The third (styleSheets[2]) is supposed to contain the Tailwind styles, but this isn't certain due to some glitches.
  // Therefore, we're looping through the stylesheets again in the code below to confirm.
  let styleSheet = styleSheets[2];
  for (let i = 0; i < styleSheets.length; i += 1) {
    if (styleSheets[i].ownerNode?.innerHTML?.match(regex)) {
      styleSheet = styleSheets[i];
      break; // Exit loop once the matching stylesheet is found
    }
  }

  const rules = styleSheet?.cssRules || styleSheet?.rules || [];

  for (let j = 0; j < rules.length; j += 1) {
    const rule = rules[j];

    // Find the rule for the given selectorText
    if (rule instanceof CSSStyleRule && rule.selectorText === selectorText) {
      tokens = { ...getSeperateVariables(rule.style) };
    }

    // Find color variables from the :root selector
    if (rule instanceof CSSStyleRule && rule.selectorText === ':root') {
      const rootVars = getSeperateVariables(rule.style);
      colorTokens = rootVars?.colors || {};
    }
  }

  return { ...tokens, colors: { ...tokens?.colors, ...colorTokens } };
}

export function replaceToken(str) {
  // Define replacements
  const replacements = {
    base: 'gray',
    danger: 'red',
    attention: 'amber',
    brand: 'blue',
    success: 'emerald'
  };

  // Create regular expression pattern from keys of replacements
  const pattern = new RegExp(Object.keys(replacements).join('|'), 'g');

  // Replace substrings using regular expression
  return str.replace(pattern, (match) => replacements[match]);
}
