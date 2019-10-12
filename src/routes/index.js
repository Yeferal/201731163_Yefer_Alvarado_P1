
const express = require('express');
const router = express.Router();
router.use(express.json());
const path = require('path');
const analisis = require('./verificacion');

//utilizaremos router para las rutas ya no app
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
router.post('/postusers', (req, res) => {
    console.log("recibo usuario");
    
    var arreglo = req.body.text;

    var arreglo1 =arreglo.split("");

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
//ruta que envia a la informacion del estudiante
router.get('/', (req, res) => {
    res.render('page-usuario', { max: 15 });

});

module.exports = router;
