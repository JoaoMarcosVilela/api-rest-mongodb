//Mapeia o ORM
const express = require('express');

//Acesso via web dos dados
const cors = require('cors');
const app = express();

app.use(cors());

app.use(express.json());

const conn = require("./database/db");
conn();

const routes = require('./routers/router');
app.use('/api',routes);

//Porta de comunicação
const port = 3000;
app.listen(port, () => {
  console.log("Servidor rodando")
});
