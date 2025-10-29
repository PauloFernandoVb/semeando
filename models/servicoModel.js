const Database= require("../db/dataBase");

const conexao=new Database();
class servicoModel{
    #id_servico;
    #desc_servico;
    #preco_servico;
    #nome_servico;

    get idServico() {
        return this.#id_servico;
    }
    set idServico(idServico) {
        this.#id_servico = idServico;
    }
    get descServico() {
        return this.#desc_servico;
    }
    set descServico(descServico) {
        this.#desc_servico = descServico;
    }
    get precoServico() {
        return this.#preco_servico;
    }
    set precoServico(precoServico) {
        this.#preco_servico = precoServico;
    }
    get nomeServico() {
        return this.#nome_servico;
    }
    set nomeServico(nomeServico) {
        this.#nome_servico = nomeServico;
    }
    constructor(idServico,descServico,precoServico,nomeServico){
        this.#id_servico=idServico;
        this.#desc_servico=descServico;
        this.#preco_servico=precoServico;
        this.#nome_servico=nomeServico;
    }
    async gravar(){
        if(this.#id_servico==0){
            let sql = `insert into SERVICO
            (DESC_SERVICO,VALOR_SERVICO,NOME_SERVICO)
            VALUES (?,?,?)`;
            let valores=[this.#desc_servico,this.#preco_servico,this.#nome_servico];
            return await conexao.ExecutaComandoNonQuery(sql,valores);
        }
    }
    async listarServicos(){
        let sql =`SELECT * FROM SERVICO`;

        var rows=await conexao.ExecutaComando(sql);
       let listaRetorno=[];
        if(rows.length>0){
            for(let i = 0; i < rows.length ; i++){
                var row=rows[i];
                listaRetorno.push(new servicoModel(
                    row["ID_SERVICO"],
                    row["DESC_SERVICO"],
                    row["VALOR_SERVICO"],
                    row["NOME_SERVICO"]
                ));
            }
        }
        return listaRetorno;
    }
}

module.exports=servicoModel;