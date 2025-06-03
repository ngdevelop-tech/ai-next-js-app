import doctrine from 'doctrine';

const customDescriptionHandler = (documentation, path) => {
  const n = path.hub.file.code.replaceAll('/n', '');
  const jsdoc = doctrine.parse(n, { unwrap: true });

  jsdoc.tags.forEach((tag) => {
    const withoutSpaces = tag.description?.replace(/\s+/g, '');
    if (tag.title === 'storybook') {
      documentation.set('storybook', withoutSpaces);
    }
    if (tag.title === 'zeroHeight') {
      documentation.set('zeroHeight', withoutSpaces);
    }
  });
};

export default customDescriptionHandler;
