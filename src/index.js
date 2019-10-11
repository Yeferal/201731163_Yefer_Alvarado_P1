// //import
// const express = require('express');
// const bodyParser = require("body-parser");
// const multipart = require('connect-multiparty');
// const app = express();
// const path = require('path');
// let fs = require('fs');
// const anali = require('./verificacion');

// const multiPartMiddleware = multipart({
//     uploadDir: './subidas'
// });

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ 
//     extended: true 
// }));

// //configuracion

// // parse application/x-www-form-urlencoded

// // app.use(bodyParser.urlencoded({ extended: false }))

// // parse application/json
// // app.use(bodyParser.json())

// // app.use(express.bodyParser());


// // app.use(express.static(path.join(__dirname,'public')));
// app.set('view engine', 'ejs');
// app.set('views',__dirname+'/views');
// app.set('port', 3000);

// // app.get(require('./routes/index'));

// app.use(express.static(path.join(__dirname,'public')));
// // 
// //rutas
// app.get('/',(req,res)=>{
//     res.render('page-usuario');
// });

// app.get('/moore',(req,res)=>{
//     res.render('page-diagramas');
// });

// app.post('/mo',(req,res)=>{
//     res.render('page-diagramas');
// });

// app.get('/analizador',(req,res)=>{
//     res.render('page-analizador');
// });

// app.post('/an',(req,res)=>{
   
//     fs.readFile('cadenas.txt', 'utf-8', (err, data) => {
//         if(err) {
//           console.log('error: ', err);
//         } else {
//           console.log("Holllass"+data);
         
//         }
//       });

//     res.render('page-analizador');
// });

// app.post('/analizador',multiPartMiddleware,(req,res)=>{
   
//     res.json({
//         "message": 'fichero subido'
//     });

//     res.render('page-usuario');
// });




// //escucha

// app.listen(app.get('port'), ()=>{
//     console.log("Esuchando en el puesto: "+app.get('port'));

// });

//imports 
const path = require('path');
const express = require('express');
const app = express();

var exec = require('child_process').exec;

/*exec('ls', function(err, stdout, stderr) {
    console.log(stdout);
});
exec('touch holamundo.txt', function(err, stdout, stderr) {
    console.log(stdout);
});
exec('ls', function(err, stdout, stderr) {
    console.log(stdout);
});*/

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

    console.log('escuchando en el puerto ', app.get('port'));
});

console.log(path.join(__dirname, '/views/saludo.html'));