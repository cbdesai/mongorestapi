curl -i -X POST -H 'Content-Type: application/json' -d '{"collectionName": "Parties","partyName": "Party111", "partyLastName": "PartyL111"}' http://localhost:3000/collections
curl -i -X POST -H 'Content-Type: application/json' -d '{"collectionName": "Parties","partyName": "Party222", "partyLastName": "PartyL222"}' http://localhost:3000/collections

curl -i -X POST -H 'Content-Type: application/json' -d '{"collectionName": "Policys", "policyID":"Policy ID 111-01","partyID":"PartyID 111","partyFullName":"Party Full Name 1","productID":"Product ID 1","productDescription":"Product desc 1"}' http://localhost:3000/collections
curl -i -X POST -H 'Content-Type: application/json' -d '{"collectionName": "Policys","policyID":"Policy 222-01","partyID":"PartyID 222","partyFullName":"Party Full Name 2","productID":"Product ID 2","productDescription":"Product desc 2"}' http://localhost:3000/collections

curl -i -X POST -H 'Content-Type: application/json' -d '{"collectionName": "Claims","claimID":"Claim ID 111-01-01", "partyID":"Party ID 111", "policyID":"Policy ID 111-01"}' http://localhost:3000/collections
curl -i -X POST -H 'Content-Type: application/json' -d '{"collectionName": "Claims","claimID":"Claim ID 111-01-01", "partyID":"Party ID 111", "policyID":"Policy ID 111-01"}' http://localhost:3000/collections


 