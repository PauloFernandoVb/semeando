document.addEventListener("DOMContentLoaded", function() {

    document.getElementById("btnCadastrar").addEventListener("click", cadastrar);

    function cadastrar(){
        let email = document.getElementById("UsuarioEmail").value;
        let nome = document.getElementById("UsuarioNome").value;
        let senha = document.getElementById("UsuarioSenha").value;
        let ativo = document.getElementById("UsuarioAtivo").value;
        let perfil = document.getElementById("UsuarioPerfil").checked;

        let listaErros=[];
        if(email==""){
            listaErros.push("UsuarioEmail");
        }
        if(nome==""){
            listaErros.push("UsuarioNome");
        }
        if(senha==""){
            listaErros.push("UsuarioSenha");
        }if(ativo==""){
            listaErros.push("UsuarioAtivo");
        }
        if(perfil==""){
            listaErros.push("UsuarioPerfil");
        }

        if(listaErros.length==0){
            //se tiver tudo prenchido cria o obj para stringficar
            let obj={
                nome:nome,
                email:email,
                senha:senha,
                ativo:ativo,
                perfil:perfil
            }

            fetch("/usuarios/cadastrar",{
                method: 'POST',
                body:JSON.stringify(obj),
                headers:{
                    "Content-Typer":"application/json",
                }
            })
            .then(r=>{
                return r.json();
            })
            .then(r=>{
                if(r.ok){
                    window.location.href="./usuarios";
                }
                else{
                    alert(r.msg);
                }
            })
        }
        else{
            //avisar sobre o preenchimento incorreto
            for(let i = 0; i < listaErros.length; i++) {
                let campos = document.getElementById(listaErros[i]);
                campos.style["border-color"] = "red";
            }
            alert("Preencha corretamente os campos indicados!");
        }

    }

})