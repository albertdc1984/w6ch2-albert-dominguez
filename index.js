/* node . */
require("dotenv").config();
const { program } = require("commander");

const http = require("http");

const server = http.createServer();
const debug = require("debug")("calculadora");
const chalk = require("chalk");
const prompt = require("prompt");

const operations = require("./operations");

prompt.start();
program.option("-a <number>");
program.option("-b <number>");
program.parse();

const numbers = program.opts();

/* const result = operations(Number(numbers.a), Number(numbers.b));

result.forEach((operation) =>
  debug(
    chalk.blue(
      `El resultat de la ${chalk.green(operation.name)} és ${chalk.yellow(
        operation.result
      )}`
    )
  )
);
 */
const port = process.env.SERVER_PORT || 8080;

server.listen(port, () => {
  debug(`Server is up in http://localhost:${port}`);
});

server.on("error", (error) => {
  debug(`Error on server: ${error.message}`);
});

server.on("request", (request, response) => {
  debug(`Request arrived at $(request.url} with method ${request.method}`);
  if (request.url === 500) {
    response.statusCode = 200;
    response.write("<h1>Hi</h`>");
    response.end();
  } else if (request.url === "/bye") {
    response.statusCode = 500;
    response.write("<h1>Bye</h`>");
    response.end();
  } else {
    response.statusCode = 404;
    response.write("Resource not found");
  }
});

const askName = async () => {
  const numberA = await prompt.get("number");

  const numberB = await prompt.get("number");

  const blackOps = await operations(
    Number(numberA.number),
    Number(numberB.number)
  );

  return blackOps.forEach((operation) =>
    debug(
      chalk.blue(
        `El resultat de la ${chalk.green(operation.name)} és ${chalk.yellow(
          operation.result
        )}`
      )
    )
  );
};
askName();
