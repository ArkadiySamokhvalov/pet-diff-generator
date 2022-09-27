### Hexlet tests:
[![Actions Status](https://github.com/ArkadiySamokhvalov/diff-generator/workflows/hexlet-check/badge.svg)](https://github.com/ArkadiySamokhvalov/diff-generator/actions)
[![Actions Status](https://github.com/ArkadiySamokhvalov/diff-generator/workflows/Node%20CI/badge.svg)](https://github.com/ArkadiySamokhvalov/diff-generator/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/a9b31615d2fb18b5c201/maintainability)](https://codeclimate.com/github/ArkadiySamokhvalov/diff-generator/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/a9b31615d2fb18b5c201/test_coverage)](https://codeclimate.com/github/ArkadiySamokhvalov/diff-generator/test_coverage)

# Языки
[![en](https://img.shields.io/badge/lang-en-blue.svg)](https://codeclimate.com/github/ArkadiySamokhvalov/diff-generator/blob/main/README.en.md)

# Описание: 
**Генератор различий** — это программа CLI, определяющая разницу между двумя структурами данных. Поддерживаемые форматы: JSON, XML, YAML.

## Установка:
1. Убедитесь, что вы установили [Node.js](https://nodejs.org/en/) не ниже версии 12: ```node -v```.
2. Клонируйте репозиторий: ```git@github.com:ArkadiySamokhvalov/diff-generator```.
3. Смените каталог на diff-generator.
4. Запустите команду: ```make install```.

```shell
$ git clone git@github.com:ArkadiySamokhvalov/diff-generator.git
$ cd diff-generator
$ make install
```

## Запуск тестов:
```shell
$ make test
```

## Использование:
Вы можете использовать проект как утилиту в терминале или как библиотеку в своем проекте JavaScript. Вы можете генерировать отчет в виде plain text, stylish или json.

```shell
$ gendiff -h
Usage: gendiff [options] <filepath1> <filepath2>
Compares two configuration files and shows a difference.
Options:
  -V, --version          output the version number
  -f, --format <type>    output format (choices: "stylish", "plain", "json", default: "stylish")
  -h, --help             display help for command
```

## Примеры работы:
### Вывод сравнения файлов по умолчанию
[![asciicast](https://asciinema.org/a/keym81YdfLhLE7CYpmrTsNgbi.svg)](https://asciinema.org/a/keym81YdfLhLE7CYpmrTsNgbi)
### Вывод сравнения файлов в формате plain text
[![asciicast](https://asciinema.org/a/wTBu1DDyx50Iijf2851u7DUNX.svg)](https://asciinema.org/a/wTBu1DDyx50Iijf2851u7DUNX)
### Вывод сравнения файлов в формате json
[![asciicast](https://asciinema.org/a/uCcxBxbX3qwOSQ5kKMXrFDtoi.svg)](https://asciinema.org/a/uCcxBxbX3qwOSQ5kKMXrFDtoi)