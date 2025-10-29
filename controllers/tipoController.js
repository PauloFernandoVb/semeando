const TipoModel=require("../models/tipoModel");

class TipoController{
async tipoView(req,res){
    let tipo = new TipoModel();
    let lista = await tipo.listartipos();
    res.render("tipo/listar",{lista:lista});
}
}

module.exports=TipoController;