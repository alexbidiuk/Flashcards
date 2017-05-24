var express = require('express');
var bodyParser = require('body-parser'); 

var app = express();
var data = {};

// app.use('/*', express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.get('/api/data', (req, res) => res.json(data));
app.post('/api/data', (req, res) => res.json(data = req.body));
app.get('*', (req, res) => res.sendFile(__dirname + '/public/index.html'));
app.listen(3333);