const Database = require("../db/dataBase");
const conexao= new Database();

class MarcaModel{
    #id_marca;
    #desc_marca;
    #nome_marca;
    get idMarca(){
        return this.#id_marca;
    }
    set idMarca(idMarca){
        this.#id_marca=idMarca;
    }

    get descMarca(){
        return this.#desc_marca;
    }
    set descMarca(descMarca){
        this.#desc_marca=descMarca;
    }

    get nomeMarca(){
        return this.#nome_marca;
    }
    set nomeMarca(nomeMarca){
        this.#nome_marca=nomeMarca;
    }
    constructor(idMarca,descMarca,nomeMarca){
        this.#desc_marca=descMarca;
        this.#id_marca=idMarca;
        this.#nome_marca=nomeMarca;
    }

    async gravar(){
        if(this.#id_marca==0){
            let sql ="insert into MARCA(DESC_MARCA , NOME) values(?,?)";
            let valores=[
            this.#desc_marca,
            this.#nome_marca
        ];
        return await conexao.ExecutaComandoNonQuery(sql,valores);
        }else{
        //update depois
        }
        
    }
    async listarMarcas(){
        let sql = "select * from MARCA"

        var rows=await conexao.ExecutaComando(sql);

        let listaRetorno=[];
        if(rows.length>0){
            for(let i=0;i<rows.length;i++){
                var row = rows[i];
                listaRetorno.push(new MarcaModel
                    (row["ID_MARCA"],row["DESC_MARCA"],row["NOME"]));
            }
        }
        return listaRetorno;
    }
}

module.exports=MarcaModel;