const express = require('express');
const bodyParser = require('body-parser');
const plantsController = require('./src/controllers/plants');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(bodyParser.json());

app.get('/plant/:id', plantsController.getById);
app.get('/plants', plantsController.getAll);
app.delete('/plant/:id', plantsController.remove);

/*
POST /plant/:id : sobrescreve a planta com id;
POST /plant : cria uma planta nova;
GET /sunny/:id : retorna uma planta que precisa de sol com o id.
*/

app.listen(PORT, () => console.log(`API escutando na porta ${PORT}`));
