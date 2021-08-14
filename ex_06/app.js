const MongoClient = require('mongodb').MongoClient;

var express = require('express');
var server= express();
server.listen(4242);

const url = 'mongodb://127.0.0.1:27017' 
const dbName = 'mern-pool';

MongoClient.connect(url, { useUnifiedTopology: true }, function(err, client) {
    if(err)return console.error("Connection failed.");
    
    const db = client.db(dbName);
    //client.close();
    server.get('/utilisateur', function(request, response) {
        
         
              
    const projection = { "validated": "in progress" };
    const cursor = db.collection("students").find(projection).sort({"lastname": 1}).collation({locale: "en_US", numericOrdering: true}).toArray(function(err,doc) {
      if(err){
        console.log(err);
        return;
      }
     response.json(doc);
     response.end();
   });
    
    //cursor.forEach(console.dir)
              

        
        
      });
});

