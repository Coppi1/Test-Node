const { isFibonacci } = require("../services/fibService");

exports.checkFibonacci = (req, res) => {
  const { number } = req.body;

  if (typeof number !== "number" || number < 0) {
    return res.status(400).json({ error: "Número inválido" });
  }

  const result = isFibonacci(number);

  res.json({
    numero: number,
    pertenceSequencia: result,
  });
};
