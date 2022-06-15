import getPath from './getPath.js';
import parser from './parser.js';

export default (filepath1, filepath2) => {
  const path1 = getPath(filepath1);
  const path2 = getPath(filepath2);

  const object1 = parser(path1);
  const object2 = parser(path2);

  const sortKeys1 = Object.keys(object1).sort();
  const sortKeys2 = Object.keys(object2).sort();

  const uniqKeys = [...new Set([].concat(...sortKeys1, ...sortKeys2))];

  const result = uniqKeys.map((key) => {
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

  return `{\n${result.flat().join('\n')}\n}`;
};
