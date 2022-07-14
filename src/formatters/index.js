import stylish from './stylish.js';
import plain from './plain.js';

export default (data, format) => {
  switch (format) {
    case 'stylish':
      return stylish(data);
    case 'plain':
      return plain(data);
    case 'json':
      return JSON.stringify(data, null, '  ');
    default:
      throw new Error(`Invalid file format type: '.${format}'! Try supported file formats.`);
  }
};
