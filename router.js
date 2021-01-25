const express = require('express');
const routes = express.Router();
const tabe =require("./controller/controlleSql")



//rota Formulario
routes.get('/', tabe.MostrarProdutos)

  // rotas cadastro,
routes.post('/produtos',tabe.InserirProdutos)

// rota delete 
routes.post('/produtos/id=:id',tabe.DeletarProdutos )

module.exports = routes;