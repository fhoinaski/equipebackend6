const { createOneUser } = require("../../controllers/usuario.controllers"); 
const { Router } = require("express");
// const { auth } = require("../../middlewares/auth");

class UserRouter {
    routesFromUser() {
        const userRoutes = Router();
        userRoutes.post("/usuario", createOneUser);
        return userRoutes;
    }
}

module.exports = new UserRouter();