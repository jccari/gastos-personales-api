const express   = require('express');
const path      = require('path');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

module.exports = function (app, db) {
    app.get('/', (req, res) => {
        console.log("GET /");
        console.log(path.join(__dirname, '../../public/html'));
        //console.log(path.dirname())
        var options = {
            root: path.join(__dirname, '../../public/html'),
            dotfiles: 'deny',
            headers: {
                'x-timestamp': Date.now(),
                'x-sent': true
            }
        };

        res.sendFile('index.html', options);
    });
    
    app.post("/nuevo-gasto",(req, res) => {
        console.log("POST nuevo-gasto");
        const bodyy = req.body;
        console.log(bodyy);
    });
    
    app.delete('/borrar-gasto', (req, res) => {
        
    });
}