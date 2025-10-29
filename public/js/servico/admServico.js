document.addEventListener("DOMContentLoaded", function () {

    document.getElementById("btnCadastrar").addEventListener("click", cadastrar);

    function limparValidacao() {
        document.getElementById("descServico").style["border-color"] = "#ced4da";

        document.getElementById("precoServico").style["border-color"] = "#ced4da";

        document.getElementById("nomeServico").style["border-color"] = "#ced4da";
    }
    function cadastrar() {
        limparValidacao();

        var desc = document.getElementById("descServico").value;
        var preco = document.getElementById("precoServico").value;
        var nome = document.getElementById("nomeServico").value;
        listaErros = [];
        if (desc == "" && preco == "" && nome == "") {
            listaErros.push("descServico,precoServico,nomeServico");
        }
        if (listaErros.length == 0) {
            let des = {
                descricao: desc,
                preco: preco,
                nome: nome
            };
            fetch("/servicos/cadastrar", {
                method:'POST',
                body: JSON.stringify(des),
                headers: {
                    "content-Type": "application/json",
                }

            })
                .then(r => {
                    return r.json();
                })
                .then(r => {
                    if (r.ok) {
                        window.location.href = "/servicos";
                    } else {
                        alert(r.msg);
                    }
                })
        } else {
            document.getElementById("descServico").style["border-color"] = "red";

            document.getElementById("precoServico").style["border-color"] = "red";

            document.getElementById("nomeServico").style["border-color"] = "red";
        }
    }
});