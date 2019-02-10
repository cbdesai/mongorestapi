//server.js

var express = require('express');
app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose');
bodyParser = require('body-parser');
routingInfo = './api/routes/universalMasterRoutes';

const fs = require('fs');
const path = require('path');

//MongoDB Connection 
connectionString = 'mongodb://localhost/tododb';

const modelsPath = path.resolve(__dirname, './api/models')
fs.readdirSync(modelsPath).forEach(file => {
  require(modelsPath + '/' + file);
  console.log ("printing File " + file + "\n printing fs" + fs);
})

mongoose.Promise = global.Promise;
mongoose.connect(connectionString, { useNewUrlParser: true });

//app.use(express.bodyParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require(routingInfo); //importing route
routes(app); //register the route

app.listen(port);

app.use(function (req, res) {
  res.status(404).send({ url: req.originalUrl + ' not found' })
});

console.log('RESTful API server started on: ' + port);
