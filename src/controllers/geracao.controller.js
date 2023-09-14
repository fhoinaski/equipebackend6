const { Geracao } = require("../models/geracao");
const { Unidade } = require("../models/unidades");

class GeracaoController {

  async createOneGeracao(request, response) {

    const {  unidadeId,
             referenceDate, 
             totalGenerated 
            } = request.body
    
    try {

      if (!unidadeId) {
        throw new Error("O ID da unidade deve ser informada.")
      }

      if (!referenceDate) {
        throw new Error("O ano/mês de referencia deve ser informado")
      }

      if (!totalGenerated) {
        throw new Error("A quantidade deve kW ser informada.")
      }

      const geracaoMensal = await Geracao.findOne({
        where: {

        }
      })

      if (geracaoMensal) {
        return response.status(400).send({ message: "Já existe lançamento para essa unidade nesse mês" })
      }
      
      const novaGeracaoMensal = await Deposit_Medicine.create({
            unidadeId,
            referenceDate, 
            totalGenerated
      })

      return response.status(200).send({ "Identificador": Geracao.id, message: "Novo lançamento incluido com sucesso" })

    } catch (error) {
      if (error.message.split('\n').length > 1) {
        return response.status(400).json({ message: "Erro ao criar o lançamento", causes: error.message.split('\n') })
      }
      console.log(error.message.split('\n'))
      return response.status(400).json({ message: "Erro ao criar lançamento", cause: error.message })
    }
  }
}

module.exports = new GeracaoController();