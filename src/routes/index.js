
const express = require('express');
const router = express.Router();
router.use(express.json());
const path = require('path');
const analisis = require('./verificacion');
var arreglo;

//router para las rutas
router.get('/', (req, res) => {
    res.render('page-usuario', { max: 15 });
});
//ruta a los diagramas
router.get('/moore',(req,res)=>{
    res.render('page-diagramas', { max: 15 });
});

    //ruta al aalizador
router.get('/analizador',(req,res)=>{
     res.render('page-analizador', { max: 15 }); 
 });


//ruta para analizar el texto
router.post('/solicitar', (req, res) => {
    console.log("recibo usuario");
    
    arreglo = req.body.text;

    var arreglo1 =arreglo.split("");

    analisis.capturar(arreglo1);

    res.render('page-analizador', { max: 15 });
});
//envia los datos obtenidos al frontend
router.get('/obtener', (req, res) => {  
    analisis.verificar();
    var tip = analisis.tipoT();
    console.log("info: "+tip);
    setTimeout(()=>{
        res.status(200).json({
            filas: analisis.filas(),
            tipo: analisis.tipoT(),
            palabra: analisis.informacion(),
            numero: analisis.numeroTokens()
        });
    }, 35 );
});

//ruta inicial de las paginas
router.get('/', (req, res) => {
    res.render('page-usuario', { max: 15 });

});




module.exports = router;
