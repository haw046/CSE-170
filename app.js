var express = require('express');
var exphbs = require("express-handlebars");

var app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


// Middleware =============================================

app.use('/public', express.static(__dirname + '/public'));
app.set('views', __dirname + '/views');

// Routing ================================================

app.get('/', function(req, res){
	res.render("index", {layout:false});
});

app.get('/sample', function(req, res){
	res.render("masonry", {layout:false});
});

// Listen on provided or default port =====================

var port = process.env.PORT || 8080;

app.listen(port, function(){
	console.log("Node server listening on port %s", port);
});