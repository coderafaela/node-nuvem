const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Bem vindo, ao meu site");
});

app.get("/produtos", function (req, res) {
  res.send("lista de produto versão 2.0");
});

//app.get("/consulta/:parametro", function (req, res) {
//  res.send("retorno consulta:" + req.params.parametro);
//});

app.get("/consulta/", function (req, res) {
  var cpf = req.query["cpf"];
  if (cpf) {
    res.send("retorno consulta: cpf = " + cpf);
  } else {
    res.send("CPF NÃO FOI FORNECIDO");
  }
});

app.get("/cadastro/{:nome}", function (req, res) {
  var nome = req.params.nome;
  if (nome) {
    res.send("<h1>produto " + nome + " criado!</h1>");
  } else {
    res.send("<h1>produto criado!</h1>");
  }
});

app.listen(4000, function (erro) {
  if (erro) {
    console.log("Erro ao iniciar");
  } else {
    console.log("Servidor iniciado");
  }
});
