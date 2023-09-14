const {
    createOneUnidade,
    listAllUnidades,
    listOneUnidade,
    listAllUnidadesAtivas,
    listAllUnidadesInativas,
    updateOneUnidade,
    deleteOneUnidade,
    restoreOneUnidade,
} = require('../controllers/unidades.controller');

const { Router } = require('express');

const auth = require('../middlewares/auth');

class UnidadeRoutes {
    routesFromUnidade() {
        const unidadeRoutes = Router()

        unidadeRoutes.post('/createOneUnidade',  createOneUnidade);
        unidadeRoutes.get('/listAllUnidades', listAllUnidades);
        unidadeRoutes.get('/listOneUnidade/:id', listOneUnidade);
        unidadeRoutes.get('/listAllUnidadesAtivas', listAllUnidadesAtivas);
        unidadeRoutes.get('/listAllUnidadesInativas', listAllUnidadesInativas);
        unidadeRoutes.put('/updateOneUnidade/:id', updateOneUnidade);
        unidadeRoutes.delete('/deleteOneUnidade/:id',  deleteOneUnidade);
        unidadeRoutes.patch('/restoreOneUnidade/:id', restoreOneUnidade);

        return unidadeRoutes;
    }
}

module.exports = new UnidadeRoutes();