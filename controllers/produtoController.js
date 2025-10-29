const MarcaModel = require("../models/marcaModel");
const TipoModel=require("../models/tipoModel");
const ProdutoModel = require("../models/produtoModel")
class ProdutoController {

    async listarView(req, res) {
        let prod = new ProdutoModel();
        let lista = await prod.listarProdutos();
        res.render('produtos/listar', { lista: lista });
    }
    async cadastrar(req, res) {
        let marca = new MarcaModel();
        let tipo=new TipoModel();
        let lista = await tipo.listartipos();
        //FAZER A TIPO MODEL E CONTROLLER
        let listarMarcas = await marca.listarMarcas();
        res.render('produtos/cadastrar', { listarMarcas: listarMarcas ,lista:lista});
    }
    async cadastrarProduto(req, res) {
        var cor = "";
        var msg = "";
        if (req.body.nome != "" && req.body.preco != "" && req.body.quantidade != "" && req.body.marca != "" && req.body.tipo != "" && req.body.compra != "" && req.body.descricao!="") {
            let produto = new ProdutoModel(
                0,
                req.body.nome,        //
                req.body.descricao,   //
                req.body.compra,     // 
                req.body.preco,     //  
                req.body.marca,       //
                req.body.tipo,       // 
                req.body.quantidade   //
            );

            let resultado = await produto.gravar()

            if (resultado) {
                res.send({ ok: true, msg: "Produto Cadastrado com Sucesso!" })
            }
        } else {
            res.send({
                ok: false, msg: "Preencha o campo!"
            });
        }
    }
}

module.exports = ProdutoController;