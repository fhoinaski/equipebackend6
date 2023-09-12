const {
    createOneUsuario,
    loginUsuario,
    listAllUsuarios,
    listOneUsuario,
    updateOneUsuario,
    updateOneStatus,
    updateOneSenha,
    deleteOneUsuario,
    restoreOneUsuario
} = require('../../controllers/usuario.controller');
const { Router } = require('express');
const { auth } = require('../../middlewares/auth');

class UsuarioRouter {
    routesFromUsuario() {
        const usuarioRoutes = Router();

        usuarioRoutes.post('/createOneUsuario', createOneUsuario);
        usuarioRoutes.post('/loginUsuario', loginUsuario);
        usuarioRoutes.get('/listAllUsuarios', auth, listAllUsuarios);
        usuarioRoutes.get('/listOneUsuario/:id', auth, listOneUsuario);
        usuarioRoutes.patch('/updateOneUsuario/:id', auth, updateOneUsuario);
        usuarioRoutes.patch('/updateOneStatus/status/:id', auth, updateOneStatus);
        usuarioRoutes.patch('/senha/:id', auth, updateOneSenha);
        usuarioRoutes.delete('/updateOneSenha/:id', auth, deleteOneUsuario);
        usuarioRoutes.patch('/restore/:id', auth, restoreOneUsuario);

        return usuarioRoutes;
    }
}

