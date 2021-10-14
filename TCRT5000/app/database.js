//Conexão nodejs e banco - Raylane
var mysql = require('mysql'); //importando a biblioteca

var conexao = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "sprint_"
});

var resultado;

function tempoPermanencia() {
    const query = "select n_vaga as numero_vaga, DAYOFWEEK(data_hora_entrada) as dia_semana, TIMEDIFF(data_hora_entrada,data_hora_saida) as tempo from tabela_sensor";
    conexao.query(query, function (err, result, fields) {
        if (err) throw err;
        resultado = result;
    });

    return resultado;
}

module.exports = { tempoPermanencia };