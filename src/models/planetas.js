const db = require('../dbconection');

class PlanetasModel {
    static async consultar(){
        let query = db('planetas');
        return await query;
    }

    static async consultarPorID(id){
        return await db('planetas').where('id_planeta', id);
    }

    static async agregar(planetas) {
        let query = db('planetas').insert(planetas)
        return await query;
    }


    static async editar(id,planetas) {
        let query = db('planetas')
        .where({ id_planeta: id })
        .update(planetas)
        return await query;
    }


    static async actualizar(id_planeta, campos) {
        return await db('planetas').where('id_planeta', id_planeta).update(campos);
    }
    
}

module.exports = PlanetasModel;