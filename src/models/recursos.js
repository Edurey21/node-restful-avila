const db = require('../dbconection');

class RecursosModel {
    static async consultar() {
        let query = db('recursos');
        return await query;
    }

    static async consultarPorID(id){
        return await db('recursos').where('id_recurso', id);
    }
    
    static async agregarRecurso(nombre,res){
        if (!nombre){
            return res.json({success:false, 
                message:'Un error a ocurido, Porfavor intente más tarde'});
        }
        db('recursos')
        .insert({nombre})
        .catch((err)=>{
            console.log(err);
            return res.json({success:false, message:'Un error a ocurido, Porfavor intente más tarde'});
        });
    }
}

module.exports = RecursosModel;