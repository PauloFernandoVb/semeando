const MarcaModel= require("../models/marcaModel");

class MarcaController{
    async marcaView(req,res){
        let marca= new MarcaModel();
        let lista = await marca.listarMarcas();
        res.render('marcas/listar',{lista:lista});

    }
    async marcaCadastro(req,res){
        res.render('marcas/cadastrar');
    }
    async cadastrarMarca(req,res){
        var cor ="";
        var msg ="";
        if(req.body.descricao!="" && req.body.nome!=""){
            let marca= new MarcaModel(0,req.body.descricao,req.body.nome);
            let resultado = await marca.gravar()

            if(resultado){
                res.send({ok:true,msg:"Marca Cadastrada com Sucesso!"});
            }else{
                res.send({
                    ok:false,msg:"Erro ao cadastrar Marca!"
                })
            }
        }else{
            res.send({
                ok:false,msg:"Preencha o campo!"
            });
        }
    }

}

module.exports=MarcaController;