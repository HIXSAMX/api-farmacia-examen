const Producto = require("../models/producto.js");

exports.altaProducto = (req, res) => {
    Producto.insertarProducto(req.body.nombre, req.body.sustancia_activa, req.body.categoria, req.body.precio, req.body.existencia, req.body.porcion, 
        req.body.estatus, req.body.receta_obligatoria, req.body.descripcion, req.body.ruta_imagen, (err, data) => {
        if (err) {
            if (err.error === "No se inserto ningun dato") {
                res.status(400).send({
                    message: `No se pudo realizar el alta del producto`
                });
            } else {
                res.status(500).send({
                    message: "Error al intentar hacer el alta del producto!"
                });
            }
        } else {
            console.log(data);
            
            if(data.filas_afectadas > 0 && data.id_creado > 0) {
                res.status(200).send({
                    id_creado: data.id_creado,
                    message: "Alta de producto exitosa!"
                });

            }
        }
    })
};