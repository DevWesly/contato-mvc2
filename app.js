const express = require('express');

const session = require('express-session');

const ContatosRouter = require('./routes/ContatosRouter');
const UsuariosRouter = require('./routes/UsuariosRouter');

//middlewares
const marcaEntradaDeRequisicao = require('./middlewares/marcaEntradaDeRequisicao');

const app = express();

app.set('view engine', 'ejs');


//configura req.body para conter informaçoes digitadas pelo usuario no formulario
app.use(express.urlencoded({extended:false}));

//config a pasta public

app.use(express.static('public'));

//configurando o uso do session
app.use(session({
    secret:"segredo",
    resave: false,
    saveUninitialized:false
}));

//aplicando middleware 
app.use(marcaEntradaDeRequisicao);




app.get('/', (req, res) => {
    res.send("Olá")
});

app.use('/', ContatosRouter);
app.use('/', UsuariosRouter);

// app.use()

app.listen(3300, () => {
    console.log("Rodando porta 3300")
});