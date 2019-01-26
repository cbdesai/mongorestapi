//partyModel.js

'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var PartySchema = new Schema({
  partyID: {
    type: String,
    default: 'partyID 1' 
  },
  partyName: {
    type: String,
    required: 'Kindly enter the Party Name'
  },
  partyLastName: {
    type: String,
    required: 'Kindly enter the Party Last Name'
  },
  dateofBirth: {
    type: String,
    default: '1/1/1922'
  }
});

module.exports = mongoose.model('Parties', PartySchema);