const bcrypt = require('bcrypt');
const fs = require('fs');
const path = require('path');





module.exports = {
    showRegistrar: (req, res) => {
        res.render('registro.ejs');
    },
    mostrarLogin: (req, res) => {
        res.render('login.ejs');
    },
    login: (req, res) => {

        //etrair o login e a senha digitadas pelo usuario;
        let {
            email,
            senha
        } = req.body;



        //corregar meu array de usuarios

        const usuarios = require('../database/usuarios.json');

        //verificar se o emais exite e se asenha deste email confere;
        usuarios.find(

            u =>u.email == email && bcrypt.compareSync(senha,u.senha);

            //que é igual a....
            // u => {
            //     if(u.email == email && bcrypt.compareSync(senha,u.senha)){
            //         return true;

            //     } else {
            //         return false;
            //     }
            // }
        )

        //se o usuario na for encontrado ou a senha for invalida, mandar erro

        //se o usuario e senha ok; setar a sessopn do usuario

        //e redirecionar usuario para a tela que lista contatos;

    }
}