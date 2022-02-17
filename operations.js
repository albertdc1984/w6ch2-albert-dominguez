const prompt = require("prompt");

const operations = (a, b) => {
  const aN = Number(a);
  const bN = Number(b);
  const suma = aN + bN;
  const resta = aN - bN;
  const multiplicacio = aN * bN;
  const divisio = aN / bN;
  return `<p>${suma},${resta},${multiplicacio},${divisio}</p>`;
};
const calculatorFunction = async () => {
  const numberA = await prompt.get("number");

  const numberB = await prompt.get("number");

  const blackOps = await operations(
    Number(numberA.number),
    Number(numberB.number)
  );

  return blackOps.forEach(
    (operation) =>
      `<p>El resultat de la ${operation.name} és ${operation.result}</p>`
  );
};

module.exports = { operations, calculatorFunction };
