//import
const express = require('express');
const app = express();
const path = require('path');
// const bodyParser = require("body-parser");

//configuracion

// parse application/x-www-form-urlencoded

// app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
// app.use(bodyParser.json())

// app.use(express.bodyParser());


// app.use(express.static(path.join(__dirname,'public')));
app.set('view engine', 'ejs');
app.set('views',__dirname+'/views');
app.set('port', 3000);

// app.get(require('./routes/index'));

app.use(express.static(path.join(__dirname,'public')));
// 
//rutas
app.get('/',(req,res)=>{
    res.render('page-usuario');
});

app.get('/moore',(req,res)=>{
    res.render('page-diagramas');
});

app.post('/mo',(req,res)=>{
    res.render('page-diagramas');
});

app.get('/analizador',(req,res)=>{
    res.render('page-analizador');
});





//escucha

app.listen(app.get('port'), ()=>{
    console.log("Esuchando en el puesto: "+app.get('port'));

});