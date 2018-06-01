# blockChain
blockChain Implementation using javascript

run application use below command
node src/BlockChainBasics.js

Result :
========

Validate blockchain
true

{
          "chain": [
                    {
                              "index": 0,
                              "timestamp": "30/5/2018",
                              "data": "Genesis",
                              "previousHash": "0",
                              "hash": "09586d1b0534b4f723c0fab2070fa5a397a65114ee8b4a2742af8385001e5ace"
                    },
                    {
                              "index": 1,
                              "timestamp": "30/5/2018",
                              "data": {
                                        "name": "Brajesh",
                                        "Amount": "$100"
                              },
                              "previousHash": "09586d1b0534b4f723c0fab2070fa5a397a65114ee8b4a2742af8385001e5ace",
                              "hash": "86fb871d83d2bea728cecabec90d58e0679d40267eb00228339c438be89a263a"
                    },
                    {
                              "index": 2,
                              "timestamp": "31/5/2018",
                              "data": {
                                        "name": "Rajesh",
                                        "Amount": "$200"
                              },
                              "previousHash": "86fb871d83d2bea728cecabec90d58e0679d40267eb00228339c438be89a263a",
                              "hash": "d0e09c30a75e9a7c247afcd26308bccd2abe21e892c528e59e607bde1b25a519"
                    }
          ]
}




