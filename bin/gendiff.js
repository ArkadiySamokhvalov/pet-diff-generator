#!/usr/bin/env node
import { Command } from "commander";
const program = new Command();

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('0.0.2');

program
  .argument('<filepath1>', '')
  .argument('<filepath2>', '');

program
  .option('-f, --format <type>', 'output format');

program.parse();