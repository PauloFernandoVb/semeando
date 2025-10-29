const Database = require('../db/dataBase');

const conexao = new Database();

class tipoModel {

    #idTipo;
    #tipoDesc;

    get idTipo() { return this.#idTipo; } set idTipo(idTipo) {this.#idTipo = idTipo;}
    get tipoDesc() { return this.#tipoDesc; } set tipoDesc(tipoDesc) {this.#tipoDesc = tipoDesc;}

    constructor(idTipo, tipoDesc) {
        this.#idTipo = idTipo
        this.#tipoDesc = tipoDesc
    }


    async listartipos() {

        let sql = 'select * from TIPO_PRODUTO';
        
        var rows = await conexao.ExecutaComando(sql);

        let listaRetorno = [];

        if(rows.length > 0){
            for(let i=0; i<rows.length; i++){
                var row = rows[i];
                listaRetorno.push(new tipoModel
                    (row['ID_TIPO'], row['TIPO_DESCRICAO']));
            }
        }

        return listaRetorno;
    }

}

module.exports = tipoModel;