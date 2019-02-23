const gastosRoutes = require('./gastos-routes');

module.exports = function(app, db) {
	gastosRoutes(app,db);
}