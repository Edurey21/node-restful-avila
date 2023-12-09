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
app.post('/recursos', RecursosController.agregar);
app.get('/recursos/:id([0-9]+)', RecursosController.itemGet);

app.get('/planetas', PlanetasController.indexGet);
app.post('/planetas', PlanetasController.agregar);

app.get('/misiones', MisionesController.indexGet);
app.get('/naves_espaciales', Naves_EspacialesController.indexGet);

app.listen(puerto, function(){
    console.log("Servidor en espera http://localhost");

});