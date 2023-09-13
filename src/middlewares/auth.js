const { config } = require('dotenv');
const { verify } = require('jsonwebtoken');
config();

async function auth(req, res, next) {
    try {
        console.log("Entramos no middleware de autenticação")
        const { authorization } = req.headers;
        req["payload"] = verify(authorization, process.env.JWT_SECRET);
        console.log(req.payload);
        next();
    } catch (error) {
        return res.status(401).send({
            message: "Não autorizado",
            cause: error.message,
        });
    }
}

module.exports = auth;