const sql = require('./db.js');

const Producto = function (producto) {
    this.id = producto.id
    this.nombre = producto.nombre
    this.sustancia_activa = producto.sustancia_activa
    this.categoria = producto.categoria
    this.precio = producto.precio
    this.existencia = producto.existencia
    this.porcion = producto.porcion
    this.estatus = producto.estatus
    this.receta_obligatoria = producto.receta_obligatoria
    this.descripcion = producto.descripcion
    this.ruta_imagen = producto.ruta_imagen
}

Producto.insertarProducto = (nombre, sustancia_activa, categoria, precio, existencia, porcion, estatus, receta_obligatoria, descripcion, ruta_imagen, result) => {
    sql.query(`INSERT INTO Productos (nombre, sustancia_activa, categoria, precio, existencia, porcion, estatus, receta_obligatoria, descripcion, ruta_imagen)` +
    `VALUES ("${nombre}", "${sustancia_activa}", "${categoria}", "${precio}", "${existencia}", "${porcion}", "${estatus}", "${receta_obligatoria}", "${descripcion}", "${ruta_imagen}")`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        console.log(res.affectedRows)
        if (res.affectedRows > 0 && res.insertId > 0 ) {
            result(null, {"filas_afectadas":res.affectedRows, "id_creado": res.insertId});
            return;
        } else {
            result({ error: "No se inserto ningun dato" }, null);
        }
        
    });
}

module.exports = Producto;