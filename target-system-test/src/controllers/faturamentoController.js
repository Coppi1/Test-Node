const fs = require("fs").promises;
const { parseXML } = require("../services/xmlParser");

exports.getFaturamento = async (req, res) => {
  try {
    const format = req.query.format || "json";
    let data;

    if (format === "xml") {
      const xml = await fs.readFile("./src/data/dados.xml", "utf8");
      const result = await parseXML(xml);
      data = result.rows.row.map((item) => ({
        dia: parseInt(item.dia[0]),
        valor: parseFloat(item.valor[0]),
      }));
    } else {
      const json = await fs.readFile("./src/data/dados.json", "utf8");
      data = JSON.parse(json);
    }

    const valores = data
      .filter((item) => item.valor > 0)
      .map((item) => item.valor);
    const min = Math.min(...valores);
    const max = Math.max(...valores);
    const avg = valores.reduce((a, b) => a + b, 0) / valores.length;
    const aboveAvg = valores.filter((valor) => valor > avg).length;

    res.json({
      menor_valor: min,
      maior_valor: max,
      dias_acima_media: aboveAvg,
    });
  } catch (error) {
    res.status(500).json({ error: "Erro ao processar dados" });
  }
};
