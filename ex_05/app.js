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
    server.get('/formulaire.html', function(request, response) {
        let valeurlastname = request.query.lastname; 
        let valeurfirstname = request.query.firstname; 
        let valeuremail = request.query.email; 
        let valeurphone = request.query.phone; 
        let valeurvalidated = request.query.validated; 
        let valeuradmin = request.query. admin; 
        if(valeurlastname && valeurfirstname && valeuremail && valeurphone && valeurvalidated ){
              const newStudent = {
                lastname:valeurlastname,
                firstname:valeurfirstname,
                email: valeuremail,
                phone: valeurphone,
                validated: valeurvalidated,
                admin: false
              }
              db.collection("students").insertOne(newStudent, null, function (error, results) {
                if (error) return response.send('Failed to save the collection.');
                response.send("Collection saved.");    
                return
            });

        }else{
        response.sendFile( __dirname  + '/formulaire.html');
        }
        
      });
});

