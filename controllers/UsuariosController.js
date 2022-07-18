module.exports = {
    showRegistrar: (req, res) => {
        res.render('registro.ejs');
    },
    mostrarLogin: (req, res) => {
        res.render('login.ejs');
    }
}