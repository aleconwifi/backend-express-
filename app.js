// Requires: importacion de librerias para que funcione algo
//cargar la libreria de express
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');


//Conexion a la base de datos
mongoose.connection.openUri('mongodb://localhost:27017/HospitalDB', (err, res) => {
    if (err) throw err;

    console.log('Base de datos: \x1b[32m%s\x1b[0m', ' online')


})



// Inicializar variables
var app = express();

//CONFIGURACION BODY PARSER
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

// IMPORTAR Rutas
var appRoutes = require('./rutas/app')
var usuarioRoutes = require('./rutas/usuario')
var loginRoutes = require('./rutas/login')


//Rutas
app.use('/usuario', usuarioRoutes);
app.use('/login', loginRoutes);
app.use('/', appRoutes);








//Escuchar peticiones
app.listen(3000, () => {
    console.log('Express puerto 3000: \x1b[32m%s\x1b[0m', ' online')

})