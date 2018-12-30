//universalMasterController.js

'use strict';

var collectionName = 'Tasks';

var mongoose = require('mongoose'),
 collectionObjectModel = mongoose.model(collectionName);

//-----------------------------------

exports.list_all_CollectionObjects = function(req, res) {
  collectionObjectModel.find({}, function(errObj, rcdObj) {
    if (errObj)
      res.send(errObj);
    res.json(rcdObj);
  });
};

//-----------------------------------

exports.create_a_CollectionObject = function(req, res) {
  var new_localCollectionObjectModel = new collectionObjectModel(req.body);
  new_localCollectionObjectModel.save(function(errObj, rcdObj) {
    if (errObj)
      res.send(errObj);
    res.json(rcdObj);
  });
};

//-----------------------------------

exports.read_a_CollectionObject = function(req, res) {
  collectionObjectModel.findById(req.params.taskId, function(errObj, rcdObj) {
    if (errObj)
      res.send(errObj);
    res.json(rcdObj);
  });
};

//-----------------------------------
// still refering TaskID ----------------------------------------------------------------------------------

exports.update_a_CollectionObject = function(req, res) {
  collectionObjectModel.findOneAndUpdate({_id: req.params.taskId}, req.body, {new: true}, function(errObj, rcdObj) {
    if (errObj)
      res.send(errObj);
    res.json(rcdObj);
  });
};

//-----------------------------------

exports.delete_a_CollectionObject = function(req, res) {
  collectionObjectModel.remove({
    _id: req.params.taskId
  }, function(errObj, rcdObj) {
    if (errObj)
      res.send(errObj);
    res.json({ message: 'Collection successfully deleted' + rcdObj.body });
  });
};
