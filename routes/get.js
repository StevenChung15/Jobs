const express = require('express');
const router = express.Router();
const db = require("../models/db");
const collection = "lists";

router.get('/',(req,res) => {
    db.getDB().collection(collection).find({}).toArray((err,documents) =>{
        if(err)
            console.log(err);
        else {
            res.json(documents);
        }
    });
});

router.get('/:id',(req,res) => {
    const jobsID = req.params.id;

    db.getDB().collection(collection).findOneAndGet({_id : db.getPrimaryKey(jobsID)},(err,result) => {
        if(err)
            console.log(err);
        else{
            res.json(result);
        }
    });
});


module.exports = router; 