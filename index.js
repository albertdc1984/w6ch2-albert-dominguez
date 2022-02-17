/* node . */
require("dotenv").config();
const { program } = require("commander");

const http = require("http");

const server = http.createServer();
const debug = require("debug")("calculadora");

const prompt = require("prompt");
const { operations } = require("./operations");

prompt.start();
program.option("-a <number>");
program.option("-b <number>");
program.parse();

const port = process.env.SERVER_PORT || 3005;

server.listen(port, () => {
  debug(`Server is up in http://localhost:${port}/`);
});

server.on("error", (error) => {
  debug(`Error on server: ${error.message}`);
});

server.on("request", (request, response) => {
  debug(`Request arrived at ${request.url} with method ${request.method}`);
  if (request.url === "/calculadora" || "/") {
    response.statusCode = 200;
    response.write("<h1>Hi</h1>");
    response.write("Oi! Nothing 'ere mate");
    response.write(operations(1, 2));
    operations();
    response.end();
  } else if (request.url === "/bye") {
    response.statusCode = 500;
    response.write("<h1>Bye</h1>");
    response.end();
  } else {
    response.statusCode = 404;
    response.write("Resource not found");
  }
});
