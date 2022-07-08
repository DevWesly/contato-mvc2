const uid = 1;



module.exports = {
    listarContatos: (req,res)=>{
        let contatos = require(`../database/contatos_${uid}.json`);
        res.send(contatos);
    },
    capturarContato: (req,res)=>{
        let contatos = require(`../database/contatos_${uid}.json`);
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