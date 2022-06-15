import { join } from 'path';
import { readFileSync } from 'fs';
import { beforeAll } from '@jest/globals';
import genDiff from '../src/genDiff.js';

const getFixturePath = (filename) => join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => readFileSync(getFixturePath(filename), 'utf-8');
let expectedResult;

beforeAll(() => {
  expectedResult = readFile('expected_result.txt');
});

test('gendiff json absolute path', () => {
  const testFile1 = getFixturePath('file1.json');
  const testFile2 = getFixturePath('file2.json');

  expect(genDiff(testFile1, testFile2)).toBe(expectedResult);
});

test('gendiff json relative path', () => {
  const testFile1 = '__fixtures__/file1.json';
  const testFile2 = '__fixtures__/file2.json';

  expect(genDiff(testFile1, testFile2)).toBe(expectedResult);
});

test('gendiff yml absolute path', () => {
  const testFile1 = getFixturePath('file1.yml');
  const testFile2 = getFixturePath('file2.yml');

  expect(genDiff(testFile1, testFile2)).toBe(expectedResult);
});

test('gendiff yml relative path', () => {
  const testFile1 = '__fixtures__/file1.yml';
  const testFile2 = '__fixtures__/file2.yml';

  expect(genDiff(testFile1, testFile2)).toBe(expectedResult);
});
