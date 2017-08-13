'use strict'
//IMPORTAMOS LOS MODELOS
const Product = require('../models/product')

//MOSTRAR 1 SOLO PRODUCTO
function getProduct(req, res) {

    let productId = req.params.productId

    Product.findById(productId, (err, product) => {
        if (err) {
            return res.status(500).send({ message: 'Error al realizar la Peticion' })
        } else if (!product) {
            return res.status(404).send({ message: 'El productono existe' })
        } else {

            res.status(200).send({ product })
        }
    })

}
//MOSTRAR TODOS LOS PRODUCTOS
function getProducts(req, res) {

    Product.find({}, (err, product) => {
        if (err) {
            return res.status(500).send({ message: 'Error al realizar la Peticion' })
        } else if (!product) {
            return res.status(404).send({ message: 'No se encontro nada' })
        } else {
            res.status(200).send({ product })

        }
    })
}
//SALVAR LOS PRODUCTOS
function saveProduct(req, res) {

    console.log('POST /api/product')
    console.log(req.body)

    let product = new Product()
    product.name = req.body.name
    product.picture = req.body.picture
    product.price = req.body.price
    product.category = req.body.category
    product.description = req.body.description

    product.save((err, productSalvado) => {
        if (err) res.status(500).send({ message: 'error al salvar los datos : ' + err })

        res.status(200).send({ product: productSalvado })
    })
}
//ACTUALIZAR 1 SOLO PRODUCTO
function updateProduct(req, res) {

    let productId = req.params.productId
    let update = req.body

    Product.findByIdAndUpdate(productId, update, (err, productoActualizado) => {
        if (err) {
            res.status(500).send({ message: 'Error al Actualizar' })
        } else {
            res.status(200).send({ product: productoActualizado })
        }
    })
}
//BORRAR 1 SOLO PRODUCTO
function deleteProduct(req, res) {
    let productId = req.params.productId

    Product.findById(productId, (err, product) => {

        if (err) res.status(500).send({ message: 'Error al borrar el Producto' })

        product.remove(err => {
            if (err) res.status(500).send({ message: 'Error al borrar el Producto' })

            res.status(200).send({ message: 'Producto borrado' })
        })

    })
}

//Exportamos todo

module.exports = {
    getProduct,
    getProducts,
    updateProduct,
    deleteProduct,
    saveProduct
}