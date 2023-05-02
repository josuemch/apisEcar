var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send({
        "Output": "Hello Mundo get version 1.3!"
    });
});

app.post('/', function(req, res) {
    res.send({
        "Output": "Hello Mundo post version 1.3!"
    });
});

app.get('/hola-mundo', function(req, res) {
    res.send('Hola mundo 123');
});

// Export your Express configuration so that it can be consumed by the Lambda handler
module.exports = app;