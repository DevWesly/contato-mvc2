// const aaaaaa = req.usuario.id;



module.exports = {
    listarContatos: (req,res)=>{
        let contatos = require(`../database/contatos_${req.usuario.id}.json`);
        res.render('home.ejs',{contatos:contatos});
    },
    capturarContato: (req,res)=>{
        let contatos = require(`../database/contatos_${req.usuario.id}.json`);
        let idDoContato = req.params.id;
        let contato = contatos.find(
            (c)=>{
                return c.id == idDoContato;
            }
        );
        if(contato === undefined){
            res.send({msg:"contato buscado ainda não existe"});
        } else {res.send(contato);}

    }
}