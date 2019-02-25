const express         = require('express');
const mongoClient     = require('mongodb').MongoClient;
const bodyParser      = require('body-parser');

const app   = express();
const db    = require('./config/db');
const dbPort = 8081

app.use(express.static('public',{}));
// app.use( bodyParser.json() ); 
app.use(bodyParser.urlencoded({ extended: false }))

const client = new mongoClient(db.dbUrl(), { useNewUrlParser: true });

client.connect(err => {
    if (err) return console.log(err)
    const database = client.db("gastos-personales");
    // perform actions on the collection object
    require('./app/routes')(app, database);
    app.listen(dbPort, ()=>{
        console.log("[MongoDB] Listen on "+ dbPort +" port")
    })
});
