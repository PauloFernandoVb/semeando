const express=require("express");
const ContatoController=require("../controllers/contatoController");
const Cctrler=new ContatoController();
const contatoRouter=express.Router();
contatoRouter.get("/",Cctrler.contatoView);

module.exports=contatoRouter;

