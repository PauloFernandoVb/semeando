const express = require("express");
const sobreNosController = require("../controllers/sobreNosController");
const sobreNosRouter = express.Router();
const sobreNos = new sobreNosController();

sobreNosRouter.get("/", sobreNos.sobreNosView);

module.exports = sobreNosRouter;