const Naves_EspacialesModel = require('../models/naves_espaciales');

class Naves_EspacialesController {
    static async indexGet(req, res){
        let data = await Naves_EspacialesModel.consultar();
        res.send(data);
    }
}

module.exports = Naves_EspacialesController;