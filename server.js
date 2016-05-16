var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.end("<h1>Timestamp Microservice</h1><p>Please append a query to the url, for example a unix timestamp or natural language timestamp (January%201%2C%202016)</p><p>See the FreeCodeCamp user stories: https://www.freecodecamp.com/challenges/timestamp-microservice</p>")
})

app.get('/:time', function(req, res){
    var query = req.params.time;
    res.end(query);
})

app.listen(8080)
