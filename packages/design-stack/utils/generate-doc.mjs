import fs from 'fs';
import { glob } from 'glob';
import path from 'path';
import { defaultHandlers, parse } from 'react-docgen';

import customHandlers from './customDocHandler.mjs';

const files = glob.sync('modules/**/index.jsx');

const componentsData = {};

files.forEach((filePath) => {
  const cd = fs.readFileSync(filePath, 'utf8');
  const components = parse(cd, {
    handlers: [...defaultHandlers, customHandlers]
  });

  if (components.length > 0) {
    const component = components[0];
    componentsData[component.displayName] = component;
  }
});

const outputPath = path.join('./dist/snippets.json');

fs.writeFileSync(outputPath, JSON.stringify(componentsData, null, 2));
