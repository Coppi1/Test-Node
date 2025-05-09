exports.getPercentuais = (req, res) => {
  const faturamento = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53,
  };

  const total = Object.values(faturamento).reduce((a, b) => a + b, 0);
  const percentuais = {};

  for (const [estado, valor] of Object.entries(faturamento)) {
    percentuais[estado] = ((valor / total) * 100).toFixed(2) + "%";
  }

  res.json(percentuais);
};
