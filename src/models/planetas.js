const db = require('../dbconection');

class PlanetasModel {
    static async consultar(){
        let query = db('planetas');
        return await query;
    }

    static async consultarPorID(id){
        return await db('planetas').where('id_planeta', id);
    }

    static async agregarPlaneta(recursos) {
        let query = db('planetas').insert(recursos)
        return await query;
        
    }
}

module.exports = PlanetasModel;