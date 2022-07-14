const express = require('express');

const ContatosRouter = require('./routes/ContatosRouter');
const UsuariosRouter = require('./routes/UsuariosRouter');

//middlewares
const marcaEntradaDeRequisicao = require('./middlewares/marcaEntradaDeRequisicao');

const app = express();

app.set('view engine','ejs');

//config a pasta public

app.use(express.static('public'));

//aplicando middleware 
app.use(marcaEntradaDeRequisicao);




app.get('/',(req,res)=>{
    res.send("Olá")
});

app.use('/',ContatosRouter);
app.use('/',UsuariosRouter);

// app.use()

app.listen(3300,()=>{console.log("Rodando porta 3300")});