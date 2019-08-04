import express from 'express';
import {MongoClient, ObjectID} from 'mongodb' //allows client connection
//Find MongoDB driver to find the CRUD operation syntaxes

import assert from 'assert' //prevents error when connecting
import config from '../config'

//MDB object
let mdb;
//USES config file to extract URL and port of the Mongo Server
//Returns a callback function with error (possible) and the db object
MongoClient.connect(config.mongodbUri,(err,db) => {
  assert.equal(null,err);

  mdb = db;
});

const router = express.Router();

router.get('/contests', (req, res) => {
  let contests={};
  mdb.collection('contests').find({}) //returns a promise which can be converted using .ToArray or .Each method
  //takes the field TAKES AN OBJECT of the field to be included
  .project({
    categoryName:1,
    contestName:1,
  })
  .each((err,contest) =>{
    assert.equal(null,err);

    if(!contest){ //IF NO MORE CONTEST
      res.send({contests});
      return;
    }

    contests[contest._id] = contest; //ADDING EACH CONTEST OBJECT TO CONTESTS TO EQUIVALENT ID

  });
  
});

router.get('/names', (req, res) => {
  let names={};
  mdb.collection('names').find({}) //returns a promise which can be converted using .ToArray or .Each method
  //takes the field TAKES AN OBJECT of the field to be included
  
  .each((err,name) =>{
    assert.equal(null,err);

    if(!name){ //IF NO MORE CONTEST
      res.send({names});
      return;
    }

    names[name._id] = name; //ADDING EACH CONTEST OBJECT TO CONTESTS

  });
  
});

router.get('/names/:nameIds', (req, res) => {
  //req.params.nameIds -> string with CSV
  const nameIds = req.params.nameIds.split(',').map(ObjectID); //CONVERSION TO NUMBERS


  let names={};
  mdb.collection('names').find({_id: {$in: nameIds}}) //FIND ALL NAMES FOR ALL IDs passed to AAPI
  //takes the field TAKES AN OBJECT of the field to be included
  
  .each((err,name) =>{
    assert.equal(null,err);

    if(!name){ //IF NO MORE CONTEST
      res.send({names});
      return;
    }

    names[name._id] = name; //ADDING EACH CONTEST OBJECT TO CONTESTS

  });
  
});

router.get('/contests/:contestId', (req, res) => {
  
  mdb.collection('contests') // FINDS ONE API CALL WITH A QUERY
  .findOne({
    _id: ObjectID(req.params.contestId) //Conversion of String to Number
  })
  .then(contest => {
    res.send(contest)
  })
  .catch(console.error);
  
});

export default router;
