const express = require('express');
const router = express.Router();
const db = require("../models/db");
const collection = "lists";
const Joi = require('joi');

router.post('/',(req,res,next) => {
    const userInput = req.body;
   
    Joi.validate(userInput,(err,result) => {
        if(err){
            const error = new Error("Invalid Input");
            error.status = 400;
            next(error);
        }
        else{
            db.getDB().collection(collection).insertOne(userInput,(err,result) => {
                if(err){
                    const error = new Error("Failed to insert Courses Document");
                    error.status = 400;
                    next(error);
                }
                else
                    res.json({result : result, document : result.ops[0],msg : "Successfully inserted Courses!!!",error : null});
            });
        }
    })
}); 


module.exports = router; 