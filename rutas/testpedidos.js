const express = require('express');
const sql = require('../datos/mysql');
const jwt = require('jsonwebtoken');

const route = express.Router();
const secretWord = "s3cr3tW0rd";

function insertarPedido (pedido) {
    return sql.query ("INSERT INTO pedidos (hora, usuarioId, estado, mediodepagoId) values (?,?,?,?)", 
    {replacement: [pedido.hora, pedido.estado, pedido.usuarioId, pedido.mediodepagoId]}
    )

};

route.post ('/', (req, res)=> {
    const pedido = req.body;
    const pedidoRegistrado = insertarPedido(pedido).then (result => {
        res.send("pedido creado correctamente");
    }).catch (error => console.log (error));
});

//ruta pruebas


module.exports = route;