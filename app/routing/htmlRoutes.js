//DAve Jagodowski - htmlRoutes.js

//Include path package to get correct file path for the html.
var path = require("path");
//route
module.exports = function(app){

//GET request to survey page
app.get('/survey', function(req, res){
	res.sendFile(path.join(__dirname + "/../public/survey.html"));
});

// Default catch-all route to home page.
app.use(function(req, res){
	res.sendFile(path.join(__dirname + "/../public/home.html"));
});

}