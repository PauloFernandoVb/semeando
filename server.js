const express = require("express"); //inicia servidor

const expressEjsLayouts = require('express-ejs-layouts'); //para usar layout

const server =express();//vira o servidor na constante

//===========================//
//aqui requiro as rotas
const routerHome=require("./routes/homeRoute");
const routerProduto=require("./routes/produtoRoute");
const routerMarca=require("./routes/marcaRoute");
const routerTipo=require("./routes/tipoRoute");
const routerServico=require("./routes/servicoRoute");
const routerSobreNos=require("./routes/sobreNos");

//===========================//

server.set("view engine",'ejs');
server.use(express.static('public'));//expor e usar a pasta public

server.set('layout','./layout.ejs');//usa o layout padrao
server.use(expressEjsLayouts);//instacia ao express layout

server.use(express.urlencoded({extended:true}));//config para as rotas POST
server.use(express.json());//possibilita stringficar objts

//===========================//
//aqui uso as rotas

server.use("/", routerHome);//loja
server.use("/produtos",routerProduto );//produtos
server.use('/marcas',routerMarca);
server.use("/tipos",routerTipo);
server.use("/servicos",routerServico);
server.use("/sobreNos",routerSobreNos);
//===========================//

// FAZER ADM PRODUTO FAZER EJS DO PRODUTO E ALTERAR MARCA E PRODUTO TAMBEM (UPDATE E DELETE)

server.listen(5000, function() { 
    console.log("Aplicação iniciada!");
});//liga a aplicaçao