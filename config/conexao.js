const mysql =require('mysql');

//     conexão com o banco de dados colocado numa variavel chamada db
const connection = mysql.createConnection({
    host: "localhost",
    port: "3306",
    database: "sistema_cadastro",
    password: "",
    user: "root",
  });

  // 2parametros  codig sql /  funçao a ser realizada
  const query = (sql, callBack) => {
    return connection.query(sql, callBack);
  };
  
//exportando a query não a conexao 

module.exports = {
    connection,
    query,
  };
