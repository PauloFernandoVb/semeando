
const UsuarioModel= require("../models/usuarioModel")

class UsuarioController{
        async cadastroView(req, resp){

        resp.render("usuarios/cadastro", );
    }

    async cadastrar(req,resp){
        let msg="";let cor="";
        if(req.body.email!=""&& req.body.senha!=""&&req.body.nome!=""&&req.body.perfil!=""){
            let usuario = new UsuarioModel(0,req.body.nome,req.body.email,req.body.senha,req.body.ativo,req.body.perfil);

            let result = await usuario.cadastrar();
            if(result) {
                resp.send({
                    ok: true,
                    msg: "Usuário cadastrado com sucesso!"
                });
            }   
            else{
                resp.send({
                    ok: false,
                    msg: "Erro ao cadastrar usuário!"
                });
            }
        }else
        {
            resp.send({
                ok: false,
                msg: "Parâmetros preenchidos incorretamente!"
            });
        }
    }
}

module.exports=UsuarioController;