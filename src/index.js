//import
const express = require('express');
const app = express();
const bodyParser = require("body-parser");

//configuracion
app.set('view engine', 'ejs');
// app.use(express.static(path.join(__dirname,'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.set('views',__dirname+'/views')
app.set('port', 3000);


// app.use(express.static(path.join(__dirname,'public')));
//rutas


app.get('/mo',(req,res)=>{

    var nombres = req.params.nombre1;
    console.log("Nombre: "+nombres);
    res.render('page-analizador');
});


app.post('/mo',(req,res)=>{

    function leerArchivo(e) {
        var archivo = e.target.files[0];
        if (!archivo) {
          return;
        }
        var lector = new FileReader();
        lector.onload = function(e) {
          var contenido = e.target.result;
          mostrarContenido(contenido);
        };
        lector.readAsText(archivo);
      }
      
      function mostrarContenido(contenido) {
          console.log(contenido);
      }

    var nombres = req.body.nombre1;
    console.log("Nombre: "+nombres);
    res.render('page-analizador');
});

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