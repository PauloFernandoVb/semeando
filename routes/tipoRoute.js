const express= require("express");

const TipoController=require("../controllers/tipoController");

const tpCtrl= new TipoController();
const tipoRouter=express.Router();

tipoRouter.get("/",tpCtrl.tipoView);

module.exports=tipoRouter;