const {Router} = require('express');
const {login, register} = require('../controllers/users.controller');
const routes = Router();

routes.get('/users/login', login);
routes.get('/users/register', register);

module.exports = routes;