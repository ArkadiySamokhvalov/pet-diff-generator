#!/usr/bin/env node
import { program } from 'commander';
import genDiff from '../src/genDiff.js';

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('0.0.3');

program
  .option('-f, --format <type>', 'output format', 'stylish');

program
  .argument('<filepath1>', '')
  .argument('<filepath2>', '')
  .action((filepath1, filepath2) => console.log(genDiff(filepath1, filepath2)));

program.parse();
