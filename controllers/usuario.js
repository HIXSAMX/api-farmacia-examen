const Usuario = require("../models/usuarios.js");

exports.validarLogin = (req, res) => {
    Usuario.validarDatos(req.body.username, req.body.password, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(400).send({
                    message: `Usuario o contraseña incorrectos`
                });
            } else {
                res.status(500).send({
                    message: "Error al intentar hacer login!"
                });
            }
        } else {
            console.log(data)
            var user = {
                username: data.usuario,
                usuarioValido: "OK"
            }

            res.status(200).send({
                user,
                message: "Login Exitoso!"
            });

        }
    })
};