require('./config/config');


const express = require('express');
const app = express();

const bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.post('/api/v1/authentication/authenticate', function(req, res) {
    res.json('Autentificando...')
});

app.post('/api/v1/authentication/passsword/change', function(req, res) {

    let body = req.body;
    if (body.nombre === undefined) { //si no ingresa el nombre entra aca
        res.status(400).json({ //muestra codigo 400
            ok: false, //muestra el estado
            mensaje: 'El nombre es necesario'
        });

    } else {


        res.json({
            mijitorico: body
        });
    }
});

//app.post('/api/v1/authentication/forgot/rut', function(req, res) {
//  res.json('Enviando contraseña a un usuario valido...')
//});

app.put('/api/v1/authentication/forgot/:rut', function(req, res) {
    let rut = req.params.rut;

    res.json({
        rut
    });
});

app.listen(process.env.PORT, () => {
    console.log('escuchando puerto: ', 3000);
});