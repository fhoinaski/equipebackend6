
const {
    listAllUnidades,
    createOneDate,
    createOneTotal,
    updateOneDate,
    updateOneTotal,
    deleteOneUnidade,
    restoreOneUnidade
} = require('../controllers/geracao.controller');

const { Router } = require('express');

const auth = require('../middlewares/auth');

class GeracaoRoutes {
    routesFromGeracao() {
        const geracaoRoutes = Router()
        geracaoRoutes.get('/listAllUnidades', listAllUnidades);
        geracaoRoutes.post('/createOneDate', createOneDate);
        geracaoRoutes.post('/createOneTotal', createOneTotal);
        geracaoRoutes.patch('/updateOneDate', updateOneDate);
        geracaoRoutes.patch('/updateOneTotal', updateOneTotal);
        geracaoRoutes.delete('/deleteOneUnidade', deleteOneUnidade);
        geracaoRoutes.restore('/restoreOneUnidade', restoreOneUnidade);
        return geracaoRoutes;
    }
}

module.exports = new GeracaoRoutes();

