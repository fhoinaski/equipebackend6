const { Usuario } = require("../models/Usuario");
const { sign } = require("jsonwebtoken");

const UserServices = {
    async createUser(user) {
        if (!user.name) return { data: "Nome é obrigatório", status: 400 };        
        if (!user.email) return { data: "E-mail é obrigatório", status: 400 };
        if (!user.password) return { data: "Senha é obrigatório", status: 400 };        
                    
        if (!user.password.length > 8) {
          return { data: "Senha deve ter no mínimo 8 caracteres", status: 400 };
        }
    
        const validateEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
        if (!validateEmail.test(user.email)) {
          return { data: "Email inválido", status: 400 };
        }
    
        const emailExistente = await Usuario.findOne({
          where: { email: user.email },
        });
    
        if (emailExistente) {
          return { data: "Email já existe", status: 409 };
        }
    
        const validatePassword = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).+$/;
    
        if (!validatePassword.test(user.password)) {
          return {
            data: "Senha deve conter ao menos uma letra maiúscula, um número e um caractere especial",
            status: 400,
          };
        }
    
        const usuarioExistente = await Usuario.findOne({ where: { email: user.email } });
    
        if (usuarioExistente) {
          return { data: "e-mail já cadastrado.", status: 409 };
        }
    
        const data = await Usuario.create(user);
    
        return { data, status: 201 };
      },
}

module.exports = UserServices;