const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://127.0.0.1:27017' 
const dbName = 'mern-pool';

MongoClient.connect(url, { useUnifiedTopology: true }, function(err, client) {
    if(err)return console.error("Connection failed.");
    console.log("Connection successfull.");
    const db = client.db(dbName);
    client.close();
});