var express = require('express');
var app = express();

app.get('/:time', function(req, res){
    res.end(req.params.time);
})

app.listen(8080)
