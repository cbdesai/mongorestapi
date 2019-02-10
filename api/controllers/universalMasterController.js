//universalMasterController.js

'use strict';

var mongoose = require('mongoose');
var express = require ('express');
var bodyParser = require ('body-parser');


//-----------------------------------

exports.list_all_CollectionObjects = function (req, res) {
  var collectionName = req.params.collectionName ;
  var collectionObjectModel = mongoose.model(collectionName);

  collectionObjectModel.find({}, function (errObj, rcdObj) {
    if (errObj)
      res.send(errObj);
    res.json(rcdObj);
  });
};
//-----------------------------------
exports.create_a_CollectionObject = function (req, res) {
  var collectionName = req.params.collectionName ;
  var collectionObjectModel = mongoose.model(collectionName);
  
  var new_localCollectionObjectModel = new collectionObjectModel(req.body);
    new_localCollectionObjectModel.save(function (errObj, rcdObj) {
    if (errObj)
      res.send(errObj);
    res.json(rcdObj);
  });
};

//-----------------------------------

exports.read_a_CollectionObject = function (req, res) {
  var collectionName = req.params.collectionName ;
  var collectionObjectModel = mongoose.model(collectionName);
  console.log ("entered here");
  collectionObjectModel.find(req.body, function (errObj, rcdObj) {
    if (errObj)
      res.send(errObj);
    res.json(rcdObj);
  });
};

//-----------------------------------

exports.update_a_CollectionObject = function (req, res) {
  var collectionName = req.params.collectionName;
  var collectionObjectModel = mongoose.model(collectionName);

  collectionObjectModel.findOneAndUpdate({ _id: req.params.collectionId }, req.body, { new: true }, function (errObj, rcdObj) {
    if (errObj)
      res.send(errObj);
    res.json(rcdObj);
  });
};

//-----------------------------------

exports.delete_a_CollectionObject = function (req, res) {
  var collectionName = req.params.collectionName ;
  var collectionObjectModel = mongoose.model(collectionName);

  collectionObjectModel.remove({
    _id: req.params.collectionId
  }, function (errObj, rcdObj) {
    if (errObj)
      res.send(errObj);
    res.json({ message: 'Collection successfully deleted' });
  });
};
