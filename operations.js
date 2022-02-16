const operations = (a, b) => {
  const aN = Number(a);
  const bN = Number(b);
  const suma = aN + bN;
  const resta = aN - bN;
  const multiplicacio = aN * bN;
  const divisio = aN / bN;
  return [suma, resta, multiplicacio, divisio];
};

module.exports = operations;
