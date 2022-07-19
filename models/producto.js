const sql = require('./db.js');

const Producto = function (producto) {
    this.id = producto.id
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


//INSERT INTO `okeio_db`.`Productos` (`id`, `nombre`) VALUES ('C', 'S');