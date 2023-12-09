const PlanetasModel = require('../models/planetas');


class PlanetasController {
    static async indexGet(req, res){
        let data = await PlanetasModel.consultar();
        res.send(data);
    }


    
    static async agregar(req, res){
       
        try {

            let data = await PlanetasModel.agregarPlaneta(req.body)
            // if (data.length == 0){
            //     res.status(404).send({code: 404, message:'not found'});
            // }
            // res.send(data);

            data = await PlanetasModel.consultarPorId(data[0]);
            if (data.length == 0){
                res.status(404).send({code: 404, message:'not found'});
            }
            res.send(data[0]);
        } catch (error) {
                           res.status(404).send({code: 404, message:error.sqlMessage});
 
        }
        
       
    }
}

module.exports = PlanetasController;