var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000;
    
    app.get('/', function(req, res) {
        res.send("Hey There From EXPRESS!!!");
    });
    
    app.get('/happy', function(req, res) {
        res.send("happy :)");
    });
    
    app.listen(port, function() {
       console.log("APP is running on PORT " + process.env.PORT);
    });
    