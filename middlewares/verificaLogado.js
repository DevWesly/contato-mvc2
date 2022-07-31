module.exports =  (req,res,next) => {
    //verifica se a req é de um usuario logado
    //req.session.usuario == undefined

    if(req.session.usuario == undefined) {
        return res.redirect('/login');
    }

    //usuario está logado

    //pegas as infos e colocar direto no req.usuario

    req.usuario = req.session.usuario;

    //mandar seguindo em frente

    next();


}