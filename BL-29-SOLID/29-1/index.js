const express = require('express');
const bodyParser = require('body-parser');
const plantsController = require('./controllers/plants');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(bodyParser.json());

app.get('/plants', plantsController.getAll);

/* GET /plants : retorna todas as plantas;
GET /plant/:id : retorna uma planta com o id;
DELETE /plant/:id : deleta uma planta com o id;
POST /plant/:id : sobrescreve a planta com id;
POST /plant : cria uma planta nova;
GET /sunny/:id : retorna uma planta que precisa de sol com o id.
*/

app.listen(PORT, () => console.log(`API escutando na porta ${PORT}`));
