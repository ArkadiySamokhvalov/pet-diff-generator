import { join } from 'path';
import { readFileSync } from 'fs';
import genDiff from '../src/genDiff.js';

const getFixturePath = (filename) => join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => readFileSync(getFixturePath(filename), 'utf-8');

test('gendiff absolute path', () => {
  const testFile1 = getFixturePath('file1.json');
  const testFile2 = getFixturePath('file2.json');
  const expectedResult = readFile('expected_result.txt');

  expect(genDiff(testFile1, testFile2)).toBe(expectedResult);
});

test('gendiff relative path', () => {
  const testFile1 = '__fixtures__/file1.json';
  const testFile2 = '__fixtures__/file2.json';
  const expectedResult = readFile('expected_result.txt');

  expect(genDiff(testFile1, testFile2)).toBe(expectedResult);
});
