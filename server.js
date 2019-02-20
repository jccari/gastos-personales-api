const Express         = require('express');
const MongoClient     = require('mongodb').MongoClient;
const BodyParser      = require('body-parser');

const app   = Express();
const db    = require('./config/db');
const dbPort = 3000

app.use(BodyParser.urlencoded({ extended: true }))

const client = new MongoClient(db.dbUrl, { useNewUrlParser: true });
client.connect(err => {
    if (err) return console.log(err)
    const collection = client.db("gastos-personales").collection("gastos-personales");
    // perform actions on the collection object
    app.listen(dbPort, ()=>{
        console.log("[MongoDb] Listen on "+ dbPort +" port")
    })
    client.close();
});
