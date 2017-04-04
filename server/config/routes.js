
var dataController = require('../data/Controller.js');

module.exports = function (app, express) {

	app.get('/api/exp/', dataController.getdata);
};

