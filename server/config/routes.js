
var movieController = require('../movie/movieController.js');

module.exports = function (app, express) {

//=============================================================================
/*								movie route									 */
//=============================================================================
	//add get request for other route
	app.get('/api/movie/', movieController.getAllMovies);
	app.post('/api/movie/', movieController.insertMovie);
	app.get('/api/movie/', movieController.getMovie);

};

