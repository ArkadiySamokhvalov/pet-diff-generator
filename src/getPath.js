import { resolve, isAbsolute } from 'path';
import { cwd } from 'node:process';

export default (filepath) => {
  if (isAbsolute(filepath)) {
    return filepath;
  }

  return resolve(cwd(), filepath);
};
