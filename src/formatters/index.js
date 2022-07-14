import stylish from './stylish.js';
import plain from './plain.js';

export default (data, format, replacer) => {
  switch (format) {
    case 'stylish':
      return stylish(data, replacer);
    case 'plain':
      return plain(data);
    default:
      throw new Error(`Invalid file format type: '.${format}'! Try supported file formats.`);
  }
};
