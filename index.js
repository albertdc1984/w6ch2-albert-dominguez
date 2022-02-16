/* node . */
require("dotenv").config();
const { program } = require("commander");

const debug = require("debug")("calculadora");
const chalk = require("chalk");
const prompt = require("prompt");

const operations = require("./operations");

prompt.start();
program.option("-a <number>");
program.option("-b <number>");
program.parse();

const numbers = program.opts();

const result = operations(Number(numbers.a), Number(numbers.b));

result.forEach((operation) => debug(`El resultat és ${chalk.red(operation)}`));
