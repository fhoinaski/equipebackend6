const {
    createOneUsuario,
    loginUsuario,
    listAllUsuarios,
    // listOneUsuario,
    updateOneUsuario,
    updateOneStatus,
<<<<<<< HEAD
    // updateOneSenha,
=======
 //   updateOneSenha,
>>>>>>> 3e007c3284f5d2d5f421b61b40376e08055ec7a7
    deleteOneUsuario,
    restoreOneUsuario,
} = require('../controllers/usuario.controller');

const { Router } = require('express');

const auth = require('../middlewares/auth');

class UsuarioRoutes {
    routesFromUsuario() {
        const usuarioRoutes = Router()

        usuarioRoutes.post('/createOneUsuario', createOneUsuario);
        usuarioRoutes.post('/loginUsuario', loginUsuario);
        usuarioRoutes.get('/listAllUsuarios', auth, listAllUsuarios);
        // usuarioRoutes.get('/listOneUsuario/:id', auth, listOneUsuario);
        usuarioRoutes.patch('/updateOneUsuario/:id', auth, updateOneUsuario);
        usuarioRoutes.patch('/updateOneStatus/:id/status', auth, updateOneStatus);
<<<<<<< HEAD
        // usuarioRoutes.patch('/updateOneSenha/:id/senha', auth, updateOneSenha);
=======
    //    usuarioRoutes.patch('/updateOneSenha/:id/senha', auth, updateOneSenha);
>>>>>>> 3e007c3284f5d2d5f421b61b40376e08055ec7a7
        usuarioRoutes.delete('/deleteOneUsuario/:id', auth, deleteOneUsuario);
        usuarioRoutes.patch('/restoreOneUsuario/:id', auth, restoreOneUsuario);

        return usuarioRoutes;
    }
}

module.exports = new UsuarioRoutes();