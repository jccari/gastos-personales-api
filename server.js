const Express         = require('express');
const MongoClient     = require('mongodb').MongoClient;
const BodyParser      = require('body-parser');

const app   = Express();
const db    = require('./config/db');
const dbPort = 8081

app.use(BodyParser.urlencoded({ extended: true }))

const client = new MongoClient(db.dbUrl(), { useNewUrlParser: true });

client.connect(err => {
    if (err) return console.log(err)
    const database = client.db("gastos-personales");
    // perform actions on the collection object
    require('./app/routes')(app, database);
    app.listen(dbPort, ()=>{
        console.log("[MongoDB] Listen on "+ dbPort +" port")
    })
});
