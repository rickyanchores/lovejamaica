const productRoute = require('express').Router();
const {
    Product
} = require('../../db/db')

productRoute
    .route('/')
    .get(async (req, res, next) => {
        try {
            const products = await Product.findAll()
            res.send(products)
        } catch (error) {
            console.log(error)
            next(error)
        }
    })
    .post(async (req, res, next) => {
        try {
            const newProduct = await Product.create(req.body)
            res.send(newProduct)
        } catch (error) {
            console.log(error)
            next(error)
        }
    })
productRoute
    .route('/:id')
    .get(async (req, res, next) => {
        try {
            const product = await Product.findByPk(req.params.id)
            res.send(product)
        } catch (error) {
            console.log(error)
            next(error)
        }
    })
    .put(async (req, res, next) => {
        try {
            const editProduct = await Product.update(req.body, {
                returning: true,
                where: {
                    _id: req.params.id
                }
            })
            res.send(editProduct)
        } catch (error) {
            console.log(error)
            next(error)
        }
    })
    .patch(async (req, res, next) => {
        try {
            const editProduct = await Product.update(req.body, {
                returning: true,
                where: {
                    _id: req.params.id
                }
            })
            res.send(editProduct)
        } catch (error) {
            console.log(error)
            next(error)
        }
    })
    .delete(async (req, res, next) => {
        try {
            const deleteProduct = await Product.destroy({
                where: {
                    _id: req.params.id
                }
            }).then((rowDeleted) => {
                if (rowDeleted > 0) res.send('Product Deleted')
                else res.send('Cannot find product to delete')
            })
        } catch (error) {
            console.log(error)
            next(error)
        }
    })

module.exports = productRoute