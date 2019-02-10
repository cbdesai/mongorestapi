//universalMasterRouter.js

'use strict';
module.exports = function(app) {
  var universalMasterControllerObj = require('../controllers/universalMasterController');
  
  //debugging code
 
 // universalMaster Routes
  app.route('/collections/:collectionName')
    .get(universalMasterControllerObj.list_all_CollectionObjects);

  app.route('/collection/:collectionName')
    .get(universalMasterControllerObj.read_a_CollectionObject)
    .put(universalMasterControllerObj.update_a_CollectionObject)
    .delete(universalMasterControllerObj.delete_a_CollectionObject)
    .post(universalMasterControllerObj.create_a_CollectionObject);

  /*app.route('/collections/:collectionName')
    .get(universalMasterControllerObj.list_all_CollectionObjects)
    .post(universalMasterControllerObj.create_a_CollectionObject);
  */
};