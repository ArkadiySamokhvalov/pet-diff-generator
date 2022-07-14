import { load } from 'js-yaml';

export default (path, ext) => {
  if (ext === 'json') {
    return JSON.parse(path);
  } if (ext === 'yml' || ext === 'yaml') {
    return load(path);
  }
  throw new Error(`Invalid file extension: '${ext}'! Try supported formats.`);
};
