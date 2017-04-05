var express = require('express');
var app = express();



require('./config/middleware.js')(app, express);
require('./config/routes.js')(app, express);




	var port = 3000;
	app.listen(port ||process.env.PORT, function () {
		console.log('...Server now listening on port ' + port);
	});


module.exports = app;