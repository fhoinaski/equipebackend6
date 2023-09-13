const { connection } = require('../database/connect');
const sequelize = require('sequelize');

const Geracao = connection.define('geracao', {
    UnidadeId: {
        type: sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'unidade',
            key: 'id'
        },
        validate: {
            isInt: {
                msg: 'O ID do unidade precisar ser numérico.'
            },
            notEmpty: {
                msg: "o ID do unidade precisa ser informado."
            }
        }
    },
    reference_date: {
        type: sequelize.DATE,
        validate: {
            notEmpty: {
                msg: "O mês/ano deve ser informado."
            }
        }
      },

    total_generated: {
        type: sequelize.INTEGER,
        validate: {
            notEmpty: {
                msg: "Favor informar a quantidade de KW."
            },
            isInt: {
                msg: "A quantidade de KW precisa ser numérica."
            }
        }
    },
    createdAt: {
        type: sequelize.DATE
    },
    updatedAt: {
        type: sequelize.DATE
    }

}, { underscored: true, timestamps: true });

module.exports = { Geracao }