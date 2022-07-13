const express = require('express');

const ContatosRouter = require('./routes/ContatosRouter')

const app = express();

app.set('view engine','ejs');

app.get('/',(req,res)=>{
    res.send("Olá")
});

app.use('/',ContatosRouter);
app.listen(3300,()=>{console.log("Rodando porta 3300")});