import { join } from 'path';
import { readFileSync } from 'fs';
import { beforeAll } from '@jest/globals';
import genDiff from '../src/genDiff.js';

const getFixturePath = (filename) => join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => readFileSync(getFixturePath(filename), 'utf-8');
let expectedResultStylish;
let expectedResultPlain;

beforeAll(() => {
  expectedResultStylish = readFile('expected-result_stylish.txt');
  expectedResultPlain = readFile('expected-result_plain.txt');
});

test('gendiff relative/absolute path', () => {
  const relPath1 = '__fixtures__/file1.json';
  const relPath2 = '__fixtures__/file2.json';
  const absPath1 = getFixturePath('file1.json');
  const absPath2 = getFixturePath('file2.json');

  expect(genDiff(relPath1, relPath2)).toBe(genDiff(absPath1, absPath2));
});

test('gendiff json stylish', () => {
  const testFile1 = getFixturePath('file1.json');
  const testFile2 = getFixturePath('file2.json');

  expect(genDiff(testFile1, testFile2)).toBe(expectedResultStylish);
});

test('gendiff json plain', () => {
  const testFile1 = getFixturePath('file1.json');
  const testFile2 = getFixturePath('file2.json');

  expect(genDiff(testFile1, testFile2, 'plain')).toBe(expectedResultPlain);
});

test('gendiff yml stylish', () => {
  const testFile1 = '__fixtures__/file1.yml';
  const testFile2 = '__fixtures__/file2.yml';

  expect(genDiff(testFile1, testFile2)).toBe(expectedResultStylish);
});

test('gendiff yml plain', () => {
  const testFile1 = '__fixtures__/file1.yml';
  const testFile2 = '__fixtures__/file2.yml';

  expect(genDiff(testFile1, testFile2, 'plain')).toBe(expectedResultPlain);
});
