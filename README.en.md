### Hexlet tests:
[![Actions Status](https://github.com/ArkadiySamokhvalov/frontend-project-lvl2/workflows/hexlet-check/badge.svg)](https://github.com/ArkadiySamokhvalov/frontend-project-lvl2/actions)
[![Actions Status](https://github.com/ArkadiySamokhvalov/frontend-project-lvl2/workflows/Node%20CI/badge.svg)](https://github.com/ArkadiySamokhvalov/frontend-project-lvl2/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/a9b31615d2fb18b5c201/maintainability)](https://codeclimate.com/github/ArkadiySamokhvalov/frontend-project-lvl2/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/a9b31615d2fb18b5c201/test_coverage)](https://codeclimate.com/github/ArkadiySamokhvalov/frontend-project-lvl2/test_coverage)

# Languages
[![ru](https://img.shields.io/badge/lang-ru-blue.svg)](https://codeclimate.com/github/ArkadiySamokhvalov/frontend-project-lvl2/blob/main/README.md)

# Description: 
**Generator of difference** is the CLI program that generate difference between two files. Supported formats: JSON, XML, YAML.

## How to install:
1. Make sure you have installed [Node.js](https://nodejs.org/en/) no lower version 12: ```node -v```.
2. Clone repository: ```git@github.com:ArkadiySamokhvalov/frontend-project-lvl2.git```.
3. Change directory to frontend-project-lvl2
4. Run the command: ```make install```.

```shell
$ git clone git@github.com:ArkadiySamokhvalov/frontend-project-lvl2.git
$ cd frontend-project-lvl2
$ make install
```

## Run tests:
```shell
$ make test
```

## How to use:
You can use the project as a script in the terminal or as a library in your JavaScript project. You can format the difference in three styles: stylish (default), plain and json.
```shell
$ gendiff -h
Usage: gendiff [options] <filepath1> <filepath2>
Compares two configuration files and shows a difference.
Options:
  -V, --version          output the version number
  -f, --format <type>    output format (choices: "stylish", "plain", "json", default: "stylish")
  -h, --help             display help for command
```

## Project asciinemas:
### File comparison output by default
[![asciicast](https://asciinema.org/a/keym81YdfLhLE7CYpmrTsNgbi.svg)](https://asciinema.org/a/keym81YdfLhLE7CYpmrTsNgbi)
### File comparison output in plain format
[![asciicast](https://asciinema.org/a/wTBu1DDyx50Iijf2851u7DUNX.svg)](https://asciinema.org/a/wTBu1DDyx50Iijf2851u7DUNX)
### File comparison output in json format
[![asciicast](https://asciinema.org/a/uCcxBxbX3qwOSQ5kKMXrFDtoi.svg)](https://asciinema.org/a/uCcxBxbX3qwOSQ5kKMXrFDtoi)