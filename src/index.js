//imports 
const path = require('path');
const express = require('express');
const app = express();

var exec = require('child_process').exec;


//configuración 
app.set('view engine', 'ejs');
app.set('port', 3000);
app.set('views', path.join(__dirname, 'views'));

//rutas
app.use(require('./routes/index'));

//middleware
app.use(express.static(path.join(__dirname, 'public')));

//escucha
app.listen(app.get('port'), () => {

    console.log('Estamos en el puerto ', app.get('port'));
});