document.addEventListener("DOMContentLoaded", function(){
        document.getElementById("btnCadastrar").addEventListener("click", cadastrar);


function limparValidacao(){
        document.getElementById("descMarca").style["border-color"] = "#ced4da";
        document.getElementById("nomeMarca").style["border-color"] = "#ced4da";
    }
function cadastrar(){
    limparValidacao();
     let descricao= document.getElementById("descMarca").value;
     let nome= document.getElementById("nomeMarca").value;

     let listaErros=[];
     if(descricao=="" && nome==""){
        listaErros.push("descMarca","nomeMarca");
     }
     if(listaErros.length==0){
        let des = {
            descricao:descricao,
            nome:nome,
        }
        fetch("/marcas/cadastrar",{
            method:'POST',
            body:JSON.stringify(des),
            headers:{
                "content-Type":"application/json",
            }
        })
        .then(r=>{
            return r.json();
        })
        .then(r=>{
            if(r.ok){
                window.location.href="/marcas";
            }else{
                alert(r.msg);
            }
        })
     }else{
            document.getElementById("descMarca").style["border-color"] = "red";
            alert("Informe a descrição da marca");
            document.getElementById("nomeMarca").style["border-color"] = "red";
            alert("Informe o nome da marca");
        }
}
});