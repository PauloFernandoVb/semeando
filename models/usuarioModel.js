const DataBase =require("../db/dataBase");
const Banco = new DataBase();

class UsuarioModel{
    #usuarioId;
    #usuarioNome;
    #usuarioEmail;
    #usuarioSenha;
    #usuarioAtivo;
    #perfilId;
    //implementar getter e setter
    get usuarioId() {return this.#usuarioId;};set usuarioId(usuarioId) {this.#usuarioId = usuarioId}

    get usuarioNome() {return this.#usuarioNome;}
    set usuarioNome(usuarioNome) {this.#usuarioNome = usuarioNome;}

    get usuarioEmail() {        return this.#usuarioEmail;}
    set usuarioEmail(usuarioEmail) {this.#usuarioEmail = usuarioEmail;}

    get usuarioSenha() {return this.#usuarioSenha;}
    set usuarioSenha(usuarioSenha) {this.#usuarioSenha = usuarioSenha;}

    get perfilId() {return this.#perfilId;}
    set perfilId(perfilId){this.#perfilId = perfilId;}

    get usuarioAtivo() {return this.#usuarioAtivo;}
    set usuarioAtivo(usuarioAtivo) {this.#usuarioAtivo = usuarioAtivo;}
    //implementar construtor
    constructor(usuarioId, usuarioNome, usuarioEmail, usuarioSenha, usuarioAtivo, perfilId) {
        this.#usuarioId = usuarioId;
        this.#usuarioNome = usuarioNome;
        this.#usuarioEmail = usuarioEmail;
        this.#usuarioSenha = usuarioSenha;
        this.#usuarioAtivo = usuarioAtivo;
        this.#perfilId = perfilId;
    }

    async cadastrar(){
        if(this.#usuarioId==0){
            //usuario novo
            let sql= "insert into tb_usuario(usu_email,usu_nome,usu_senha,usu_ativo,per_id)values (?,?,?,?,?)";
            let valores =[this.#usuarioEmail,this.#usuarioNome,this.#usuarioSenha,this.#usuarioAtivo,this.#perfilId]//array dos dados

            let result= await Banco.ExecutaComandoNonQuery(sql,valores);

            return result
        }else{
            //atualizar dados usuario velho;
            alert("erro");
        }
    }
}
module.exports=UsuarioModel