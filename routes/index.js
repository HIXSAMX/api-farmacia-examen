module.exports = (app) => {
    const usuarios = require("../controllers/usuario.js");

    var router = require("express").Router();
    var bodyParser = require('body-parser');
    var jsonParser = bodyParser.json()
    var urlencodedParser = bodyParser.urlencoded({ extended: false })


    /*Aquí estarán las rutas*/
    //Validar datos del login
    router.post("/auth/signin",jsonParser, urlencodedParser,usuarios.validarLogin);

    app.use('/api-farmacia-examen', router);

    //URL para validar conexión a la API
    app.get('/api-farmacia-examen/', (req, res) => res.status(200).send({
        message: 'Conexión a la api',
    }));

    //En caso de que la URL no se encuetre
    app.get('*', (req, res) => res.status(404).send({
        message: "URL no encontrada",
    }))
};
