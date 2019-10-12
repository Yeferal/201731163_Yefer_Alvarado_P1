// const express = require('express');
// const router = express.Router();


// app.get('/',(req,res)=>{
//     res.render('page-usuario');
// });

// app.get('/moore',(req,res)=>{
//     res.render('page-diagramas');
// });

// app.get('/analizador',(req,res)=>{
//     res.render('page-analizador');
// });


// module.exports = router;

const express = require('express');
const router = express.Router();
router.use(express.json());
const path = require('path');
const analisis = require('./verificacion');

//utilizaremos router para las rutas ya no app
router.get('/', (req, res) => {
    res.render('page-usuario', { max: 15 });
});

router.get('/moore',(req,res)=>{
    res.render('page-diagramas', { max: 15 });
});

    
router.get('/analizador',(req,res)=>{
     res.render('page-analizador', { max: 15 }); 
 });



router.get('/postdata', (req, res) => {
    console.log("recibio");
    let data = req.query.format;
    console.log(data);


});

router.post('/postusers', (req, res) => {
    console.log("recibo usuario");
    //console.log(req.body.text);
    //var tonken = analisis(capturar);
    
    var arreglo = req.body.text;
    // var arreglo1 =arreglo.split("\n").map(function(line) {
    //     return line.split(",");
    // });
    var arreglo1 =arreglo.split("");
    var textocadena =arreglo1.toString();
    
    //console.log(arreglo1);
    var encadenado = textocadena.split("");



    // console.log(encadenado);
    
    analisis.capturar(arreglo1);

    res.render('page-analizador', { max: 15 });
    //res.status(400).send('wrong');
});

router.get('/users', (req, res) => {
    console.log("envio usuario");

    setTimeout(() => {
        res.status(400).json({
            usurio: 'oliver',
            id: '4',
            carne: '202'
        });
    }, 4500);
    /*
        setTimeout(() => {
            res.status(200).json({ usuario: 'oliver sierra' });
        }, 3500);*/
});

router.get('/', (req, res) => {
    res.render('page-usuario', { max: 15 });
    //res.sendFile(path.join(__dirname,'/views/saludo.html'));
    //res.sendFile(path.join(__dirname,'../views/saludo.html'));
});

module.exports = router;
