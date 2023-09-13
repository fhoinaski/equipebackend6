// controllers/unidades.controller.js
class UnidadesController {
    async createOneUnidade(req, res) {
      const { nickname, address, brand, model, active } = req.body;
      console.log(nickname);
    //   try {
    //     const unidade = await Unidade.create(req.body);
    //     return res.status(201).json(unidade);
    //   } catch (err) {
    //     console.log(err);
    //     return res.status(500).json({ error: 'Erro ao criar unidade' });
    //   }
    }
  }
  
  module.exports = new UnidadesController();
  