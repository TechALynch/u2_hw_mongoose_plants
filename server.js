const express = require('express');
const db = require('./db');
const logger = require('morgan');
const bodyParser = require('body-parser')
const plantsControllerM = require('./controllers/plantController')

// require() imports and middleware here ^ ///////

const PORT = process.env.PORT || 3001;

const app = express();

app.use(logger('dev'))// used in express apps when you make request 
app.use(bodyParser.json())

// app.use() middleware here ^ ///////////////////

app.get('/', (req, res) => res.send('This is root!'))
app.get('/plants', plantsControllerM.getAllPlants)
app.get('/plants/:id', plantsControllerM.getOnePlant) //M for needs to match 
app.post('/plants', plantsControllerM.createPlant)
app.put('/plants/:id', plantsControllerM.updatePlant)
app.delete('/plants/:id', plantsControllerM.deletePlant)

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
