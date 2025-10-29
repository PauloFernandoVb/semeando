const Database = require("../db/dataBase");
const conexao = new Database();
class ProdutoModel {

    #id_produto;
    #nome_produto;
    #desc_produto;
    #valor_venda;
    #valor_compra;
    #qntd_estoque;
    #marca;
    #tipo_produto;

    get idProduto() {
        return this.#id_produto;
    }
    set idProduto(idProduto) {
        this.#id_produto = idProduto;
    }
    get nomeProduto() {
        return this.#nome_produto;
    }
    set nomeProduto(nomeProduto) {
        this.#nome_produto = nomeProduto;
    }
    get descProduto() {
        return this.#desc_produto;
    }
    set descProduto(descProduto) {
        this.#desc_produto = descProduto;
    }
    get valorVenda() {
        return this.#valor_venda;
    }
    set valorVenda(valorVenda) {
        this.#valor_venda = valorVenda;
    }
    get valorCompra() {
        return this.#valor_compra;
    }
    set valorCompra(valorCompra) {
        this.#valor_compra = valorCompra;
    }
    get qntdEstoque() {
        return this.#qntd_estoque;
    }
    set qntdEstoque(qntdEstoque) {
        this.#qntd_estoque = qntdEstoque;
    }
    get marca() {
        return this.#marca;
    }
    set marca(marca) {
        this.#marca = marca;
    }
    get tipoProduto() {
        return this.#tipo_produto;
    }
    set tipoProduto(tipoProduto) {
        this.#tipo_produto = tipoProduto;
    }
    constructor(idProduto, nomeProduto, descProduto, valorCompra, valorVenda, marca, tipoProduto, qntdEstoque) {
        this.#id_produto = idProduto;
        this.#nome_produto = nomeProduto;
        this.#desc_produto = descProduto;
        this.#valor_compra = valorCompra;
        this.#valor_venda = valorVenda;
        this.#marca = marca;
        this.#tipo_produto = tipoProduto;
        this.#qntd_estoque = qntdEstoque;
    }
    async gravar() {
        if (this.#id_produto == 0) {
            let sql =
                `insert into PRODUTO 
            (DESC_PRODUTO,
            VALOR_VENDA,
            VALOR_COMPRA,
            QTD_ESTOQUE,
            MARCA_ID_MARCA,
            TIPO_PRODUTO_ID_TIPO,
            NOME_PRODUTO)
            values (?,?,?,?,?,?,?)`;
            let valores = [this.#desc_produto, this.#valor_venda, this.#valor_compra, this.#qntd_estoque, this.#marca, this.#tipo_produto, this.#nome_produto];
            return await conexao.ExecutaComandoNonQuery(sql, valores);
        }
    }
    async listarProdutos() {
        let sql = `
        SELECT 
            ID_PRODUTO,
            NOME_PRODUTO,
            DESC_PRODUTO,
            VALOR_COMPRA,
            VALOR_VENDA,
            MARCA_ID_MARCA,
            TIPO_PRODUTO_ID_TIPO,         
            QTD_ESTOQUE
            
            
        FROM PRODUTO
    `;

        var rows = await conexao.ExecutaComando(sql);
        let listaRetorno = [];

        if (rows.length > 0) {
            for (let i = 0; i < rows.length; i++) {
                var row = rows[i];
                listaRetorno.push(new ProdutoModel(
                    row["ID_PRODUTO"],
                    row["NOME_PRODUTO"],
                    row["DESC_PRODUTO"],
                    row["VALOR_COMPRA"],
                    row["VALOR_VENDA"],
                    row["MARCA_ID_MARCA"],
                    row["TIPO_PRODUTO_ID_TIPO"],
                    row["QTD_ESTOQUE"],
                    
                    
                ));
            }
        }
        return listaRetorno;
    }




}
module.exports = ProdutoModel;