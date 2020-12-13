const express = require('express');
const sql = require('../datos/mysql');
const jwt = require('jsonwebtoken');

const route = express.Router();
const secretWord = "s3cr3tW0rd";
var usuarioId;
//Validacion de usuario API
const validateUser = (req, res, next) => {
    try{
        
        const token = req.headers.authorization.split(' ')[1];
        const verifyToken = jwt.verify(token, secretWord);
        if(verifyToken){
            req.data = verifyToken;
            let userInfo = req.data.data[0];
            usuarioId = userInfo.id;
            return next();
        }

    }catch(err){
        res.json({error: "Error validando usuario HEY"});
    }
}

const rolAdmin = (req, res, next) => {
    try{
        
        const token = req.headers.authorization.split(' ')[1];
        const verifyToken = jwt.verify(token, secretWord);
        if(verifyToken){
            req.data = verifyToken;
            let userInfo = req.data.data[0];
            if(userInfo.tipousuario != "A"){
                res.status(401).send();
            }
            else{
                return next()
            }
            
        }

    }catch(err){
        res.json({error: "Error validando usuario"});
    }
}

const checkMyInfo = (req, res, next) =>{
    try{
        
        const token = req.headers.authorization.split(' ')[1];
         
        const verifyToken = jwt.verify(token, secretWord);
        if(verifyToken){
            req.data = verifyToken;
            let userInfo = req.data.data[0];
            if(userInfo.id != req.params.id){
                res.status(401).send();
            }
            else{
                return next()
            }
            
        }

    }catch(err){
        res.json({error: "Error validando usuario"});
    }
}

// validacion de rutas 

route.use(validateUser);

function insertarPedido(pedido){
    var fecha = new Date();
    return sql.query("INSERT INTO pedidos (hora, estado, usuarioId, mediodepagoId) values(?,?,?,?)", 
        {  replacements: [fecha, pedido.estado, pedido.usuarioId, pedido.mediodepagoId]}
    );
}

async function insertarPedidodetalle(pedidoId, platos){
 
    try {
        const queries = platos.map((plato)=>{
          var query = "INSERT INTO pedidosdetalle (platosId, pedidosId) VALUES " + "(" + plato.platosId +"," + pedidoId +")";
          return sql.query(query);
        }
 )
    await Promise.all(queries);
    return true;
    } catch (error) {
     console.log(error) 
     return false  
    }
}


route.post("/", (req, res) => {
    const pedido = req.body;
    const platos = req.body.platos;
    const pedidoRegistrado = insertarPedido(pedido).then(result => {
        const pedidodetalle = insertarPedidodetalle(result[0], platos).then(resultDetail =>{
            if (resultDetail) {res.status(200).send("Se creo un pedido correctamente")}
            else {
                res.status(401).send("no se pudo crear pedido");
            }
        }).catch(error => console.log(error));
    }).catch(error => console.log(error));

})

route.get("/", rolAdmin, (req, res) => {
    sql.query('SELECT * FROM pedidos p inner join pedidosdetalle pd on p.id = pd.pedidosId', 
        { type : sql.QueryTypes.SELECT }
    ).then(result =>{
        res.json(result);
    });
})

route.get("/usuario/:id/pedidos", checkMyInfo, (req, res) => {
    const userId = req.params.id;
    sql.query('SELECT * FROM pedidos p inner join pedidosdetalle pd on p.id = pd.pedidosId WHERE p.usuarioId = userId', 
        {replacements : {id: userId}, type : sql.QueryTypes.SELECT }
    ).then(result =>{
        res.json(result);
    });
})

route.put("/", rolAdmin, (req, res) =>{
    const pedido = req.body;
    sql.query('UPDATE pedidos SET estado = :estado WHERE id = :id', 
        { replacements: {
                id : pedido.id,
                estado : pedido.estado
            } 
        }
    ).then(result =>{
        res.status(200).send(pedido);
    });
});

route.delete("/:id", rolAdmin, (req, res) =>{
    const pedidoId = req.params.id;
    sql.query('DELETE FROM pedidosdetalle WHERE pedidosId = :id', 
        { replacements: {
                id : pedidoId
            } 
        }
    ).then(result =>{
        sql.query('DELETE FROM pedidos WHERE id = :id', 
        { replacements: {
                id : pedidoId
            } 
        }
        ).then(result2 =>{
            res.status(204).send();
        });
    });
});

module.exports = route;