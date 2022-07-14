import { resolve, isAbsolute, extname } from 'path';
import { cwd } from 'node:process';
import { readFileSync } from 'node:fs';
import parse from './parser.js';
import buildTree from './buildTree.js';
import formatOutput from './formatters/index.js';

const getPath = (filepath) => (isAbsolute(filepath) ? filepath : resolve(cwd(), filepath));
const parseContent = (filepath) => {
  const absolutePath = getPath(filepath);
  const path = readFileSync(absolutePath, 'utf8');
  const ext = extname(filepath).slice(1);
  return parse(path, ext);
};

export default (filepath1, filepath2, format = 'stylish') => {
  const file1 = parseContent(filepath1);
  const file2 = parseContent(filepath2);
  const diffInfo = buildTree(file1, file2);
  const formattedTree = formatOutput(diffInfo, format);

  return formattedTree;
};
