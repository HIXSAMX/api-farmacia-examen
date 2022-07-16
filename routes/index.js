module.exports = (app) => {

    var router = require("express").Router();


    /*Aquí estarán las rutas*/
    //Validar datos del login
    //router.post("/auth/signin",usuarios.validarLogin);

    app.use('/api-portal-rh', router);

    //URL para validar conexión a la API
    app.get('/api-portal-rh/', (req, res) => res.status(200).send({
        message: 'Conexión a la api',
    }));

    //En caso de que la URL no se encuetre
    app.get('*', (req, res) => res.status(404).send({
        message: "URL no encontrada",
    }))
};
