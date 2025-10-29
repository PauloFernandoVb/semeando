document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("btnCadastrar").addEventListener("click", cadastrar);

    function limparValidacao() {
        document.getElementById("nomeProduto").style["border-color"] = "#ced4da";

        document.getElementById("precoProduto").style["border-color"] = "#ced4da";

        document.getElementById("qntProduto").style["border-color"] = "#ced4da";

        document.getElementById("descProduto").style["border-color"] = "#ced4da";

        document.getElementById("selMarca").style["border-color"] = "#ced4da";

        document.getElementById("selTipo").style["border-color"] = "#ced4da";

        document.getElementById("precoProdutoC").style["border-color"] = "#ced4da";

    }
    function cadastrar() {
        limparValidacao();
        var nome = document.getElementById("nomeProduto").value;
        var precoV = document.getElementById("precoProduto").value;
        var qntd = document.getElementById("qntProduto").value;
        var desc = document.getElementById("descProduto").value;
        var marca = document.getElementById("selMarca").value;
        var tipo = document.getElementById("selTipo").value;
        var precoC = document.getElementById("precoProdutoC").value;

        let listaErros = [];
        if (nome == "" && precoV == "" && qntd == "" && desc == "" && marca == "" && tipo == "" && precoC == "") {
            listaErros.push("nomeProduto", "precoProduto", "qntProduto", "descProduto", "selMarca", "selTipo", "precoProdutoC");
        }
        if (listaErros.length == 0) {
            let des = {//TEM QUE SER NA ORDEM CERTA AQUI POR ISSO DEU ERROS
                nome: nome,
                preco: precoV,
                quantidade: qntd,
                descricao: desc,
                marca: marca,
                tipo: tipo,
                compra: precoC
            };

            fetch("/produtos/cadastrar", {
                method: 'POST',
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
                        window.location.href = "/produtos";
                    } else {
                        alert(r.msg);
                    }
                })
        } else {
            document.getElementById("nomeProduto").style["border-color"] = "red";
            alert("informe o Nome do Produto! ");

            document.getElementById("precoProduto").style["border-color"] = "red";
            alert("informe o Preço do Produto! ");

            document.getElementById("qntProduto").style["border-color"] = "red";
            alert("informe a Quantidade do Produto! ");

            document.getElementById("descProduto").style["border-color"] = "red";
            alert("informe a Descriçao do Produto! ");

            document.getElementById("selMarca").style["border-color"] = "red";
            alert("informe a Marca do Produto! ");

            document.getElementById("selTipo").style["border-color"] = "red";
            alert("informe o Tipo do Produto! ");

            document.getElementById("precoProdutoC").style["border-color"] = "red";
            alert("informe o Preco de Compra do Produto! ");
        }
    }
});