import { extname } from 'path';
import { readFileSync } from 'node:fs';
import { load } from 'js-yaml';

export default (path) => {
  const ext = extname(path);
  let object = {};

  if (ext === '.json') {
    object = JSON.parse(readFileSync(path));
  }

  if (ext === '.yml' || ext === '.yaml') {
    object = load(readFileSync(path));
  }

  return object;
};
