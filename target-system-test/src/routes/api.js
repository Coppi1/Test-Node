const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/authMiddleware");
const authController = require("../controllers/authController");
const sumController = require("../controllers/sumController");
const fibController = require("../controllers/fibController");
const faturamentoController = require("../controllers/faturamentoController");
const estadosController = require("../controllers/estadosController");

router.post("/auth/login", authController.login);

router.use(authMiddleware);
router.get("/v1/questions/1", sumController.getSum);
router.post("/v1/questions/2", fibController.checkFibonacci);
router.get("/v1/questions/3", faturamentoController.getFaturamento);
router.get("/v1/questions/4", estadosController.getPercentuais);

module.exports = router;
