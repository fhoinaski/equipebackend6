const { Router } = require('express');
const { routesFromUsuario } = require('./v1/usuario.routes');
const { routesFromUnidade } = require('./v1/unidade.routes');
const { routesFromLogin } = require('./v1/login.routes');
const { routesFromGeracao } = require('./v1/geracao.routes');

const routes = Router()

routes.use('api',
    routesFromUsuario,
    routesFromUnidade,
    routesFromLogin,
    routesFromGeracao

);

module.exports = routes
