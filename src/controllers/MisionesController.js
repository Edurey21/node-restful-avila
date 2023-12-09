const MisionesModel = require('../models/misiones');

class MisionesController {
    static async indexGet(req, res){
        let data = await MisionesModel.consultar();
        res.send(data);
    }
}

module.exports = MisionesController;