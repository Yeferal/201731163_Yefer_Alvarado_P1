const express = require('express');
const router = express.Router();


app.get('/',(req,res)=>{
    res.render('page-usuario');
});

app.get('/moore',(req,res)=>{
    res.render('page-diagramas');
});

app.get('/analizador',(req,res)=>{
    res.render('page-analizador');
});


module.exports = router;