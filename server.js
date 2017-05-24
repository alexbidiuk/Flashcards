var express = require('express');
var bodyParser = require('body-parser'); 

var data = {};

var app = express();

app.use(express.static(__dirname + '/app'))
	.use(bodyParser.json())
	.get('/api/data', (req, res) => res.json(data))
	.post('/api/data', (req, res) => res.json(data = req.body))
	.get('*', (req, res) => res.sendFile(__dirname + '/app/index.html'))
	.listen(3333);