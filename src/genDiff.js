import { resolve, extname, isAbsolute } from 'path';
import { readFileSync } from 'node:fs';
import { cwd } from 'node:process';

export default (filepath1, filepath2) => {
  const getPath = (filepath) => {
    if (isAbsolute(filepath)) {
      return filepath;
    }

    return resolve(cwd(), filepath);
  };

  const path1 = getPath(filepath1);
  const path2 = getPath(filepath2);
  let result = [];

  if (extname(filepath1) === '.json' && extname(filepath2) === '.json') {
    const object1 = JSON.parse(readFileSync(path1));
    const object2 = JSON.parse(readFileSync(path2));
    const sortKeys1 = Object.keys(object1).sort();
    const sortKeys2 = Object.keys(object2).sort();
    const uniqKeys = [...new Set([].concat(...sortKeys1, ...sortKeys2))];

    result = uniqKeys.map((key) => {
      if (Object.prototype.hasOwnProperty.call(object1, key)) {
        if (Object.prototype.hasOwnProperty.call(object2, key)) {
          if (object1[key] === object2[key]) {
            return `    ${key}: ${object1[key]}`;
          }
          return [`  - ${key}: ${object1[key]}`, `  + ${key}: ${object2[key]}`];
        }
        return `  - ${key}: ${object1[key]}`;
      }
      return `  + ${key}: ${object2[key]}`;
    });
  }

  return `{\n${result.flat().join('\n')}\n}`;
};