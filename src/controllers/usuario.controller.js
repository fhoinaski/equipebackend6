const { Usuario } = require('../models/Usuario');
const { senha } = require('../models/Usuario');
const { JWT_SECRET } = require('../config/db.config');
const { config } = require('dorenv');
const { sign } = require('jsonwebtoken');
const { res } = require('express');
config();

class UsuarioController {
    async createOneUsuario(req, res) {
        try {
            const {
                email,
                senha,
                status
            } = req.body;

            const usuarioExistente = await Usuario.findOne({
                where: { email }
            });

            if (usuarioExistente) {
                return res.status(400).send({
                    message: 'Falha na Operação de criar usuário',
                    cause: 'Email já existe no cadastro de usuário.'
                });
            }

            const usuario = await Usuario.create({
                nome,
                email,
                senha,
                cpf,
                status
            });

            return res.status(200).send({
                message: 'Usuário criado com sucesso',
                usuario
            });
        } catch (error) {
            const status = error.message.status || 400;
            const message = error.message.message || error.message;
            return res.status(parceInt(status)).send({
                message: 'Falha na operação de criar usuário',
                cause: message
            });
        }
    }

    async loginUsuario(req, res) {
        try {
            const { email, senha } = req.body;

            const usuario = await Usuario.findOne({
                where: { email: email }
            });

            if (!usuario) {
                return res.status(404).send({
                    message: 'Falha na operação de login',
                    cause: 'E-mail não encontrado'
                });
            }

            if (usuario.senha !== senha) {
                return res.status(400).send({
                    message: 'Falha na operação de login',
                    cause: 'Senha inválida'
                });
            }

            const payload = {
                "email": usuario.email,
                "senha": usuario.senha
            }
            const token = sign(payload, process.env.JWT_SECRET, { expiresIn: '1d' })

            return res.status(200).send({
                message: 'Login realizado com sucesso',
                "token": token
            });
        } catch (error) {
            const status = error.message.status || 400;
            const message = error.message.message || error.message;
            return res.status(parceInt(status)).send({
                message: 'Falha na operação de login',
                cause: message
            });
        }
    }

    async listAllUsuarios(req, res) {
        try {
            const usuarios = await Usuario.findAll();
            return res.status(200).send({
                message: 'Listagem de usuários realizada com sucesso',
                usuarios
            });
        } catch (error) {
            const status = error.message.status || 400;
            const message = error.message.message || error.message;
            return res.status(parceInt(status)).send({
                message: 'Falha na operação de listar usuários',
                cause: message
            });
        }
    }

    async listOneUsusario(req, res) {
        try {
            const { id } = req.params;
            const usuario = await Usuario.findOne({
                where: {
                    id: id,
                    exclude: ['password']
                }
            });

            if (!usuario) {
                return res.status(404).send({
                    message: 'Falha na operação de listar usuário',
                    cause: 'Usuário não encontrado'
                });
            }

            return res.status(200).send({
                message: 'Listagem de usuário realizada com sucesso',
                usuario
            });
        } catch (error) {
            const status = error.message.status || 400;
            const message = error.message.message || error.message;
            return res.status(parceInt(status)).send({
                message: 'Falha na operação de listar usuário',
                cause: message
            });
        }
    }

    async updateOneUsuario(req, res) {
        try {
            const { id } = req.params;
            const {
                nome,
                email,
                senha,
                cpf,
                status
            } = req.body;

            const usuario = await Usuario.findOne({
                where: { id: id }
            });

            if (!usuario) {
                return res.status(404).send({
                    message: 'Falha na operação de atualizar usuário',
                    cause: 'Usuário não encontrado'
                });
            }

            if (!nome && !email && !senha && !cpf && !status) {
                return res.status(400).send({
                    message: 'Falha na operação de atualizar usuário',
                    cause: 'Nenhum dado para atualizar'
                });
            }

            if (nome !== undefined) {
                usuario.nome = nome;
            }
            if (email !== undefined) {
                usuario.email = email;
            }
            if (senha !== undefined) {
                usuario.password = password;
            }
            if (cpf !== undefined) {
                usuario.cpf = cpf;
            }
            if (status !== undefined) {
                usuario.status = status;
            }

            await usuario.save();

            return res.status(200).send({
                message: 'Usuário atualizado com sucesso',
                usuario
            });
        } catch (error) {
            const status = error.message.status || 400;
            const message = error.message.message || error.message;
            return res.status(parceInt(status)).send({
                message: 'Falha na operação de atualizar usuário',
                cause: message
            });
        }
    }

    async updateOneStatus(req, res) {
        try {
            const { id } = req.params;
            const { status } = req.body;

            const usuario = await Usuario.findOne({
                where: { id: id }
            });

            if (!usuario) {
                return res.status(404).send({
                    message: 'Falha na operação de atualizar status',
                    cause: 'Usuário não encontrado'
                });
            }

            if (status !== 'ativo' && status !== 'inativo') {
                return res.status(400).send({
                    message: 'Falha na operação de atualizar status',
                    cause: 'Status inválido'
                });
            }
            await Usuario.update({ status }, { where: { id: id } });

            return res.status(200).send({
                message: 'Status atualizado com sucesso',
                usuario
            });
        } catch (error) {
            const status = error.message.status || 400;
            const message = error.message.message || error.message;
            return res.status(parceInt(status)).send({
                message: 'Falha na operação de atualizar status',
                cause: message
            });
        }
    }

    async updateOnePassword(req, res) {
        try {
            const { id } = req.params;
            const { senha } = req.body;

            const usuario = await Usuario.findOne({
                where: { id: id }
            });

            if (!usuario) {
                return res.status(404).send({
                    message: 'Falha na operação de atualizar senha',
                    cause: 'Usuário não encontrado'
                });
            }

            if (!senha) {
                return res.status(400).send({
                    message: 'Falha na operação de atualizar senha',
                    cause: 'Senha não informada'
                });
            }

            await Usuario.update({ senha }, { where: { id: id } });

            return res.status(200).send({
                message: 'Senha atualizada com sucesso',
                usuario
            });
        } catch (error) {
            const status = error.message.status || 400;
            const message = error.message.message || error.message;
            return res.status(parceInt(status)).send({
                message: 'Falha na operação de atualizar senha',
                cause: message
            });
        }
    }

    async deleteOneUsuario(req, res) {
        try {
            const { id } = req.params;

            const usuario = await Usuario.findByPK({ paranoid: true });

            if (!usuario) {
                return res.status(404).send({
                    message: 'Falha na operação de deletar usuário',
                    cause: 'Usuário não encontrado'
                });
            }

            if (usuario.status === 'ativo') {
                usuario.status = 'inativo';
                await usuario.destroy();
            }

            return res.status(200).send({
                message: 'Usuário deletado com sucesso',
                usuario
            });
        } catch (error) {
            const status = error.message.status || 400;
            const message = error.message.message || error.message;
            return res.status(parceInt(status)).send({
                message: 'Falha na operação de deletar usuário',
                cause: message
            });
        }
    }

    async restoreOneUsuario(req, res) {
        try {
            const { id } = req.params;

            const usuario = await Usuario.findByPK({ paranoid: false });

            if (!usuario) {
                return res.status(404).send({
                    message: 'Falha na operação de restaurar usuário',
                    cause: 'Usuário não encontrado'
                });
            }

            await usuario.restore();
            usuario.status = 'ativo';
            await usuario.save();

            return res.status(200).send({
                message: 'Usuário restaurado com sucesso',
                usuario
            });
        } catch (error) {
            const status = error.message.status || 400;
            const message = error.message.message || error.message;
            return res.status(parceInt(status)).send({
                message: 'Falha na operação de restaurar usuário',
                cause: message
            });
        }
    }
}

module.exports = new UsuarioController();


