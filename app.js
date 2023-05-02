var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send({
    "Output": "Hello World!"
  });
});

app.post('/', function(req, res) {
  res.send({
    "Output": "Hello World!"
  });
});

app.get('/hola-mundo', function(req, res) {
  res.send('Hola mundo 123');
});

// Export your Express configuration so that it can be consumed by the Lambda handler
module.exports = app;

