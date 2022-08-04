const {Router} = require('express');
const {products, detail, cart, create, edit} = require('../controllers/products.controller');
const routes = Router();

routes.get('/products', products);
routes.get('/products/create', create);
routes.get('/products/:id', detail);
routes.get('/products/:id/edit', edit);

module.exports = routes;