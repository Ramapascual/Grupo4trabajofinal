const {Router} = require('express');
const {login, register} = require('../controllers/users.controller');
const routes = Router();

routes.get('/login', login);
routes.get('/register', register);

module.exports = routes;