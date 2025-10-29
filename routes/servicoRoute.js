const express= require("express");

const ServicoController=require("../controllers/servicoController");

const ctrl= new ServicoController();

const servicoRouter = express.Router();

servicoRouter.get("/",ctrl.listarView);
servicoRouter.get("/cadastrar",ctrl.gravar);
servicoRouter.post("/cadastrar",ctrl.cadastrarServico);


module.exports = servicoRouter;