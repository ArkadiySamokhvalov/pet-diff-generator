import { join } from 'path';
import { readFileSync } from 'fs';
import genDiff from '../src/genDiff.js';

const getFixturePath = (filename) => join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => readFileSync(getFixturePath(filename), 'utf-8');

const expectedResultStylish = readFile('expected-result_stylish.txt');
const expectedResultPlain = readFile('expected-result_plain.txt');
const expectedResultJson = readFile('expected-result_json.txt');

const extensions = ['json', 'yaml', 'yml'];

describe('Positives cases', () => {
  test.each(extensions)('Format %s', (extension) => {
    const file1 = getFixturePath(`file1.${extension}`);
    const file2 = `__fixtures__/file2.${extension}`;

    expect(genDiff(file1, file2)).toEqual(expectedResultStylish);
    expect(genDiff(file1, file2, 'plain')).toEqual(expectedResultPlain);
    expect(genDiff(file1, file2, 'json')).toEqual(expectedResultJson);
  });
});

describe('Negative cases', () => {
  test('Check wrong file formatter', () => {
    const error = new Error("Invalid file formatter type: 'dogish'! Try supported file formats.");

    expect(() => {
      genDiff(getFixturePath('file1.json'), getFixturePath('file2.json'), 'dogish');
    }).toThrow(error);
  });
  test('Check wrong file extension', () => {
    const error1 = new Error("Invalid file extension: '.txt'! Try supported formats.");

    expect(() => {
      genDiff(getFixturePath('file1-wrong.txt'), getFixturePath('file2-wrong.txt'));
    }).toThrow(error1);
  });
});
