const { Router } = require('express');
const { routesFromUser } = require('./v1/usuario.routes')

const routes = new Router();

routes.use('/api/v1/', [
    routesFromUser()
])

 

module.exports = routes;
