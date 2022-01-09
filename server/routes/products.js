const products = require('../controllers/products');
const routes = require('express').Router();

//Página de inicio - Todos los productos

//http://localhost:4000/
//http://localhost:4000/?perPage=5&page=2
routes.get('/', products.getAllProducts);

//http://localhost:4000/products/search?nameProduct=Silla gaming - Woxter Stinger Station Alien Rojo
routes.get('/products/search', products.findNameProduct)

//http://localhost:4000/products/search/detailsProduct?id=29
routes.get('/products/search/detailsProduct', products.findIdProduct)



module.exports = routes;