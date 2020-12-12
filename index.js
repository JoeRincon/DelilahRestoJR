// Set Dependencias API
const express = require('express');
const bodyParser = require('body-parser');
const platos = require('./rutas/platos');
const usuarios = require('./rutas/usuarios');
const pedidos = require('./rutas/pedidos');
const testpedidos = require('./rutas/testpedidos');

// Iniciando Servidor
const server = express();

// Middlewares
server.use(bodyParser.json());
server.use("/platos", platos);
server.use("/usuarios", usuarios);
server.use("/pedidos", pedidos);
server.use ("/testpedidos", testpedidos);



server.listen(3000, () =>{
    console.log("Servidor arriba");
});