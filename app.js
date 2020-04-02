const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const Joi = require('joi');

app.use(bodyParser.json());

//Import Database
const db = require("./models/db");

//Import Routes
const getRoute = require('./routes/get');
const postRoute = require('./routes/post');
const putRoute = require('./routes/put');
const deleteRoute = require('./routes/delete');

//Get (Read)
app.use('/api/v1/products',getRoute);

//Post (Create)
app.use('/api/v1/products',postRoute);

// //Put (Update)
// app.use('/api/v1/products',putRoute);

// //Delete (Delete)
// app.use('/api/v1/products',deleteRoute);

//Port
db.connect((err) => {
    if(err){
        console.log('Unable to connect to the database');
        process.exit(1);
    }
    else{
        app.listen(3000,() => {
            console.log('Connected to the database,app listening on port 3000')
        });
    }
});
