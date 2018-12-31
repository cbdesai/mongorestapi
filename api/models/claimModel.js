//claimModel.js

'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ClaimSchema = new Schema({
  claimID: {
    type: String,
    required: 'Kindly enter the Claim ID'
  },
  partyID: {
    type: String,
    required: 'Kindly enter the Party ID'
  },
  policyID: {
    type: String,
    required: 'Kindly enter the Policy ID'
  },
  claimReason: {
    type: String,
    default: 'Natural Death at age 100'
  },
  claimAmount: {
    type: Number,
    default: 50000
  },
  claimDate: {
    type: String,
    default: '1/1/1922'
  }
});

module.exports = mongoose.model('Claims', ClaimSchema);