const {Router} = require('express');
const {products, detail, create, edit} = require('../controllers/products.controller');
const routes = Router();

routes.get('/products', products);
routes.get('/products/:id', detail);
routes.get('/products/:id/edit', edit);
routes.get('/products/create', create);

module.exports = routes;