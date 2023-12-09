const RecursosModel = require('../models/recursos');
class RecursosController {
    static async indexGet(req, res){
        let data = await RecursosModel.consultar();
        res.send(data);
    }
    static async itemGet(req, res){
        let data = await RecursosModel.consultarPorId(req.params.id);
        if (data.length == 0){
            res.status(404).send({code: 404, message:'not found'});
        }
        res.send(data[0]);
    }
    static async agregar(req, res){
        console.log(req.body);
        let nombre = req.body.nombre;
        let data = await RecursosModel.agregarRecurso(nombre,res);
        return res.end('yes');
    }
}

module.exports = RecursosController;