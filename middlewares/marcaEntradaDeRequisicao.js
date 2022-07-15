const fs = require('fs');



module.exports = (req,res,next)=>{
    let dataHora = (new Date()).toISOString();

    fs.writeFileSync('horaAcessada.txt', (dataHora+ "\n"),{flag:'a+'});

    next();


};  