//policyModel.js

'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var PolicySchema = new Schema({
  policyID: {
    type: String,
    required: 'Kindly enter the Policy ID'
  },
  partyID: {
    type: String,
    required: 'Kindly enter the Party ID'
  },
  partyFullName: {
    type: String,
    default: 'John Smith'
  },
  productID: {
    type: String,
    default: 'Product ID 1'
  },
  productDescription: {
    type: String,
    default: 'Product description 1'
  }
});

module.exports = mongoose.model('Policys', PolicySchema);