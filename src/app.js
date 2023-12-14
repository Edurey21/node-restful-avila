const express= require('express');
var bodyParser = require('body-parser');


const RecursosController = require('./controllers/RecursosController');
const MisionesController = require('./controllers/MisionesController');
const Naves_EspacialesController = require('./controllers/Naves_EspacialesController');
const PlanetasController = require('./controllers/PlanetasController');


const app = express();
//Definimos el puerto 80
const puerto = 80;

const cors = require('cors');

app.use(cors());
app.use(express.json());

app.get('/', function (req, res){
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.send(' Estelar Odyssey ');
});



app.get('/recursos', RecursosController.indexGet);
app.get('/recursos/:id([0-9]+)', RecursosController.itemGet);
app.post('/recursos', RecursosController.agregar);
app.put('/recursos/:id([0-9]+)', RecursosController.editar);
app.patch('/recursos/:id([0-9]+)', RecursosController.itemPatch);



app.get('/misiones', MisionesController.indexGet);
app.get('/misiones/:id([0-9]+)', MisionesController.itemGet);
app.post('/misiones', MisionesController.agregar);
app.put('/misiones/:id([0-9]+)', MisionesController.editar);
app.patch('/misiones/:id([0-9]+)', MisionesController.itemPatch);



app.get('/naves_espaciales', Naves_EspacialesController.indexGet);
app.get('/naves_espaciales/:id([0-9]+)', Naves_EspacialesController.itemGet);
app.post('/naves_espaciales', Naves_EspacialesController.agregar);
app.put('/naves_espaciales/:id([0-9]+)', Naves_EspacialesController.editar);
app.patch('/naves_espaciales/:id([0-9]+)', Naves_EspacialesController.itemPatch);



app.get('/planetas', PlanetasController.indexGet );
app.get('/planetas/:id([0-9]+)', PlanetasController.itemGet);
app.post('/planetas', PlanetasController.agregar);
app.put('/planetas/:id([0-9]+)', PlanetasController.editar);
app.patch('/planetas/:id([0-9]+)', PlanetasController.itemPatch);



app.listen(puerto, function(){
    console.log("Servidor en espera http://localhost");

});