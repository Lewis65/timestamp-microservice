var express = require('express');
var app = express();
var favicon = require('serve-favicon');
var moment = require('moment');

//jesus, nobody warned me about the favicon requests
//MAKE IT STOP!
app.use(favicon(__dirname + '/public/favicon.ico'));

app.get('/', function(req, res){
    res.end("<h1>Timestamp Microservice</h1><p>Please append a query to the url, for example a unix timestamp or natural language timestamp (January%201%2C%202016)</p><p>See the FreeCodeCamp user stories: https://www.freecodecamp.com/challenges/timestamp-microservice</p>")
})

app.get('/:time', function(req, res){
    var query = req.params.time;
    var date = moment(new Date(query));
    var output = {
        nat: null,
        unix: null
        };
    if (query >= 0){
        output.unix = query;
        output.nat = moment.unix(query / 1000).format("MMMM D, YYYY");
    } else if (moment(date).isValid()){
        output.nat = moment(date).format("MMMM D, YYYY")
        output.unix = moment(date).format("X");
    }
    res.write("<h1>Timestamp Microservice</h1>")
    if(output.nat && output.unix){
        res.write("<h2>Natural</h2>")
        res.write("<p>" + output.nat + "</p>")
        res.write("<h2>Unix</h2>")
        res.end("<p>" + output.unix + "</p>")
    } else {
        res.end("<p>Sorry, your request was not recognized as a valid date.</p>")
    }
})

app.listen(8080)
