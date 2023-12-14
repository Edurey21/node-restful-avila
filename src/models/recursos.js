const db = require('../dbconection');

class RecursosModel {
    static async consultar() {
        let query = db('recursos');
        return await query;
    }

    static async consultarPorID(id){
        return await db('recursos').where('id_recurso', id);
    }
    
    static async agregar(recursos) {
        let query = db('recursos').insert(recursos)
        return await query;
    }


    static async editar(id,recursos) {
        let query = db('recursos')
        .where({ id_recurso: id })
        .update(recursos)
        return await query;
    }


    static async actualizar(id_recurso, campos) {
        return await db('recursos').where('id_recurso', id_recurso).update(campos);
    }
}

module.exports = RecursosModel;