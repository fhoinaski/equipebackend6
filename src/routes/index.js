const { Router } = require('express');
const routes = Router();

routes.use('/api', [
    routesFromUsuario(),
    routesFromUnidade(),
    //routesFromLogin(),
    routesFromGeracao(),
]);

module.exports = routes;
