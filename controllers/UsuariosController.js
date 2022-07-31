const bcrypt = require('bcrypt');
const fs = require('fs');
const path = require('path');





module.exports = {
    showRegistrar: (req, res) => {
        res.render('registro.ejs');
    },

    store: (req, res) => {
        //capturar as informações digitadas pelo infeliz

        let {
            nome,
            email,
            senha
        } = req.body;

        //importar o array de usuarios--

        let usuarios = require('../database/usuarios.json');

        //determinar o novo id do novo usuarios

        let idNovo = usuarios[usuarios.length - 1].id + 1;
        //criar a senha criptografada;

        let senhaCrip = bcrypt.hashSync(senha, 10);

        //criar um objeto com os dados do usuario
        let usuario = {
            id: idNovo,
            nome: nome,
            email: email,
            senha: senhaCrip
        };

        //adicionar o novo usuario a esse array--
        usuarios.push(usuario);

        //Salvar esse array no arquivo usuarios.jsoon
        fs.writeFileSync(path.join(__dirname, '/../database/usuarios.json'), JSON.stringify(usuarios, null, 4));

        //direcionando novo usuario      
        res.redirect('/contatos');
    },
    mostrarLogin: (req, res) => {

        let {
            email,
            senha
        } = req.body;

        const usuarios = require('../database/usuarios.json');

        let usuario = usuarios.find(u => u.email == email && bcrypt.compareSync(senha, u.senha));








        res.render('login.ejs', {
            usuario
        });
    },
    login: (req, res) => {

        //extrair o login e a senha digitadas pelo usuario;
        let {
            email,
            senha
        } = req.body;



        //corregar meu array de usuarios

        const usuarios = require('../database/usuarios.json');

        //verificar se o emais exite e se asenha deste email confere;


        // let usuario = usuarios.find(
        //     u => {
        //         if (u.email == email && bcrypt.compareSync(senha, u.senha)) {
        //             return true;

        //         } else {
        //             return false;
        //         }
        //     }
        // );

        let usuario = usuarios.find(u => u.email == email && bcrypt.compareSync(senha, u.senha));



        //se o usuario na for encontrado ou a senha for invalida, mandar erro

        if (usuario == undefined) {

            let usuario = 1;
            return res.render("login.ejs", {
                usuario,
                email,
                senha
            })
        };



        //se o usuario e senha ok; setar a sessopn do usuario

        req.session.usuario = usuario;



        //e redirecionar usuario para a tela que lista contatos;

        res.redirect('/contatos');

    }
}