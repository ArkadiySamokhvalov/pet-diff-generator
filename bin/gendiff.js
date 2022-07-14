#!/usr/bin/env node
import { program } from 'commander';
import genDiff from '../src/genDiff.js';

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('0.1.0');

program
  .option('-f, --format <type>', 'output format', 'stylish');

program
  .argument('<filepath1>', '')
  .argument('<filepath2>', '')
  .action((filepath1, filepath2) => {
    const diff = genDiff(filepath1, filepath2, program.opts().format);
    console.log(diff);
  });

program.parse();
