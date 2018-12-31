//server.js

var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),

  //  connectionString = 'mongodb://localhost/Insurance',
  connectionString = 'mongodb://localhost/Tododb',
  //connectionString = 'mongodb+srv://provideLogin:providePassWd@atlasCluster.mongodb.net/Tododb',
  localCollectionModel = './api/models/todoListModel',
  //localCollectionModel = './api/models/claimModel',
  //localCollectionModel = './api/models/partyModel',
  //localCollectionModel = './api/models/policyModel',
  
  routingInfo = './api/routes/universalMasterRoutes',
  localCollectionModelInstnce = require(localCollectionModel), //created model loading here

  bodyParser = require('body-parser');
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect(connectionString); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require(routingInfo); //importing route
routes(app); //register the route


app.listen(port);

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

console.log('RESTful API server started on: ' + port);
