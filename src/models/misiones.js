const db = require('../dbconection');

class MisionesModel {
    static async consultar() {
        let query = db('misiones');
        return await query;
    }

    static async consultarPorID(id){
        return await db('misiones').where('id_mision', id);
    }

    static async agregar(misiones) {
        let query = db('misiones').insert(misiones)
        return await query;
    }

    static async editar(id,misiones) {
        let query = db('misiones')
        .where({ id_mision: id })
        .update(misiones)
        return await query;
    }
    static async actualizar(id_mision, campos) {
        return await db('misiones').where('id_mision', id_mision).update(campos);
    }


}
    


module.exports = MisionesModel;