const {Router} = require('express');
const {index, cart} = require('../controllers/main.controller');
const routes = Router();

routes.get('/', index);
routes.get('/cart', cart);

module.exports = routes;