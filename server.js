const express = require('express');
const  App = express();
const routes = require('./router');

const bodyParser =require('body-parser'); // pra transferir os dados do fomulario entre rodas dentro do nodjs

//config ejs
App.set('view engine', 'ejs');
// config body parse
App.use(bodyParser.urlencoded({extended : true }))
// rotas
App.use(routes);
//porta
App.listen(8080,()=>{
    console.log('servidor ativo')
});