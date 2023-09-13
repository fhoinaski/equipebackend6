const UserServices = require("../services/usuario.services");
const { config } = require("dotenv");
config();

class UserController {
    async createOneUser(request, response) {
        const { name, email, password } =
          request.body;
    
        const user = await UserServices.createUser({
          name,        
          email,
          password,          
        });
    
        return response.status(user.status).json(user.data);
      }
}

module.exports = new UserController();