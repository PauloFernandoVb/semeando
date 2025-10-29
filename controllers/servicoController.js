const ServicoModel=require("../models/servicoModel");

class ServicoController{
   
    async listarView(req,res){
    let serv= new ServicoModel();
    let lista= await serv.listarServicos();
    res.render('servicos/listar',{lista:lista})
    }
    async gravar(req,res){
        res.render("servicos/cadastrar");
    }

    async cadastrarServico(req,res){
        var cor = "";
        var msg = "";
        if (req.body.descricao != "" && req.body.preco != "" && req.body.nome != "" ) {
            let servico = new ServicoModel(
                0,
                req.body.descricao,        
                req.body.preco,   
                req.body.nome,      
                
            );

            let resultado = await servico.gravar()

            if (resultado) {
                res.send({ ok: true, msg: "Servico Cadastrado com Sucesso!" })
            }
        } else {
            res.send({
                ok: false, msg: "Preencha o campo!"
            });
        }
    }
}

module.exports=ServicoController;