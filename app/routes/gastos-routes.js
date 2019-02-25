const path      = require('path');
var ObjectID    = require('mongodb').ObjectID

module.exports = function (app, db, urlencodedParser) {
    app.get('/', (req, res) => {
        console.log("GET /");
        //console.log(path.join(__dirname, '../../public/html'));
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
    
    app.post('/gasto/nuevo', (req, res) => {
        console.log("POST nuevo-gasto");
        console.log(req.body);
        db.collection("gastos").insertOne(req.body, function(err, res) {
            if (err) throw err;
            console.log("[MongoDB] Document inserted");
          });

        res.send('Hola ' + req.body.nombre+ ", sus datos fueron insertados");
    });
    
    app.delete('/gasto/borrar/:id', (req, res) => {
        var query = {'_id': new ObjectID(req.params.id) };
        console.log(query);
        db.collection("gastos").deleteOne(query, function(err, obj) {
            if (err) throw err;
            console.log("[MongoDB] id: "+ req.params.id + " deleted");
          });
    });

    app.get('/gasto/:id', (req, res) => {
        var query = {'_id': new ObjectID(req.params.id) };
        db.collection('gastos').findOne(query, (err, item) => {
			if (err) {
				res.send({ 'error': 'An error has occured' });
			} else {
				res.send(item);
			}
		});
    });

    app.put('/gasto/update', (req, res) => {
        var query = {'_id': new ObjectID(req.body.id) };
        var newvalues = { $set: {
                                    nombre: req.body.nombre, 
                                    monto: req.body.monto,
                                    categoria: req.body.categoria,
                                    descripcion: req.body.descripcion
                                 }};
        dbo.collection("gastos").updateOne(query, newvalues, function(err, res) {
          if (err) throw err;
          console.log("[MongoDB] id: "+ req.body.id+ " has been updated");
          db.close();
        });
    });
}