//import
const express = require('express');
const app = express();

//configuracion
app.set('view engine', 'ejs');
app.set('views',__dirname+'/views')
app.set('port', 3000);

//rutas

app.get('/',(req,res)=>{
    res.render('page-usuario');
});

app.get('/moore',(req,res)=>{
    res.render('page-diagramas');
});

app.get('/uno',(req,res)=>{
    req.get('dato');
    
    res.render('page-diagramas');
});


app.get('/analizador',(req,res)=>{
    res.render('page-analizador');
});

app.get('/gola',(req,res)=>{
    res.sendFile(__dirname+"/views/index.html");
});



//escucha

app.listen(app.get('port'), ()=>{
    console.log("Esuchando en el puesto: "+app.get('port'));

});