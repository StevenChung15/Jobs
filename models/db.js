const MongoClient = require("mongodb").MongoClient;
const ObjectID = require('mongodb').ObjectID;
const mongoose = require('mongoose');
const dbname = "jobs";
const url = "mongodb://localhost:27017";
const mongoOptions = {useNewUrlParser : true};

const state = {
    db : null
};

const connect = (cb) => {
    if(state.db)
        cb();
    else{
        MongoClient.connect(url,mongoOptions,(err,client) => {
            if(err)
                cb(err);
            else{
                state.db = client.db(dbname);
                cb();
            }
        });
    }
}

const schema = mongoose.Schema ({
    Name: {
        type: String,
        required: true   
    },
    Price: {
        type: Number,
        required: true   
    },
    Featured: {
        type: Boolean,
        default: false   
    },
    Updated: {
        type: Date,
        default: Date.now  
    } 
});

const getPrimaryKey = (_id) => {
    return ObjectID(_id);
}

const getDB = () => {
    return state.db;
}


module.exports = {getDB,connect,getPrimaryKey},mongoose.model('model',schema);
