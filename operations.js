const operations = (a, b) => {
  const aN = Number(a);
  const bN = Number(b);
  const suma = aN + bN;
  const resta = aN - bN;
  const multiplicacio = aN * bN;
  const divisio = aN / bN;
  return [
    { name: "suma", result: suma },
    { name: "resta", result: resta },
    { name: "multiplicació", result: multiplicacio },
    { name: "divisió", result: divisio },
  ];
};

module.exports = operations;
