const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

//Import Routes
//Get(Read)
const getRoute = require('./routes/get');

app.use('/api/v1/products',getRoute);




//Port
const port = process.env.PORT || 3030;
app.listen(port, () => console.log(`Listening on port ${port}...`));