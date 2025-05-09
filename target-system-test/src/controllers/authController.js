const jwt = require("jsonwebtoken");
const authConfig = require("../config/auth");

exports.login = (req, res) => {
  const { username, password } = req.body;

  if (username === "admin" && password === "admin") {
    const token = jwt.sign({ id: 1 }, authConfig.secret, {
      expiresIn: authConfig.expiresIn,
    });

    return res.json({ token });
  }

  return res.status(401).json({ error: "Credenciais inválidas" });
};
