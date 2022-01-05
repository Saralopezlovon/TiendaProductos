const products = require('../controllers/products');
const routes = require('express').Router();

//Página de inicio - Todos los productos

//http://localhost:3000/
//http://localhost:3000/?perPage=5&page=2
routes.get('/', products.getAllProducts);

//http://localhost:3000/products/search?nameProduct=Silla gaming - Woxter Stinger Station Alien Rojo
routes.get('/products/search', products.findNameProduct)



module.exports = routes;