const db = require('../dbconection');

class Naves_EspacialesModel {
    static async consultar() {
        let query = db('naves_espaciales');
        return await query;
    }

    static async consultarPorID(id){
        return await db('naves_espaciales').where('id_nave', id);
    }


    static async agregar(naves_espaciales) {
        let query = db('naves_espaciales').insert(naves_espaciales)
        return await query;
    }


    static async editar(id,naves_espaciales) {
        let query = db('naves_espaciales')
        .where({ id_nave: id })
        .update(naves_espaciales)
        return await query;
    }


    static async actualizar(id_nave, campos) {
        return await db('naves_espaciales').where('id_nave', id_nave).update(campos);
    }
    
}



module.exports = Naves_EspacialesModel;