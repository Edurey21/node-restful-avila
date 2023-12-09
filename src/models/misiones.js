const db = require('../dbconection');

class MisionesModel {
    static async consultar() {
        let query = db('misiones');
        return await query;
    }

    static async consultarPorID(id){
        return await db('misiones').where('id_mision', id);
    }
    
}

module.exports = MisionesModel;