//=============================//
const express =require("express");
//=============================//

const ProdutoController = require("../controllers/produtoController");
const produtoController = new ProdutoController();

const produtoRouter=express.Router();

produtoRouter.get("/", produtoController.listarView);
produtoRouter.get("/cadastrar", produtoController.cadastrar);
produtoRouter.post("/cadastrar",produtoController.cadastrarProduto)

module.exports=produtoRouter;