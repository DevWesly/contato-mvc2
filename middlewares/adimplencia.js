module.exports = (req, res, next) => {
    let usuarios = require('../database/usuarios.json');
    const usuario = usuarios.find(
        u => {
            if (u.id == req.session.usuario.id) {
                return true;
            } else {
                return false;
            }
        }
    );

    if(usuario.adimplente){
        next();
    } else{
        res.send('pague sua divida')
    }






}