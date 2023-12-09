const db = require('../dbconection');

class Naves_EspacialesModel {
    static async consultar() {
        let query = db('naves_espaciales');
        return await query;
    }

    static async consultarPorID(id){
        return await db('naves_espaciales').where('id_nave', id);
    }
    
}



module.exports = Naves_EspacialesModel;