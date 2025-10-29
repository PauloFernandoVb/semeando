//=============================//
const express =require("express");
//=============================//
const MarcaController=require("../controllers/marcaController");
const marcaController=new MarcaController();
const marcaRouter=express.Router();

marcaRouter.get('/',marcaController.marcaView);
marcaRouter.get('/cadastrar',marcaController.marcaCadastro);
marcaRouter.post('/cadastrar',marcaController.cadastrarMarca);

module.exports=marcaRouter;