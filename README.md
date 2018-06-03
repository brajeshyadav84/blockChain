# blockChain
blockChain Implementation using javascript

1. BockChain Basics (immutable blockchain)
=================================================>>>>>>>>>>>>>>>>>>>>>>>>>>>>
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



2. Mining Implementation (it's also called proof of work implementation machanism)
we’ll implement a ‘proof of work’. Here you have to prove that you have spent a lot of computing power in making a block. This process is called mining.
========================================================>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
run application use below command
node src/MiningImplementation.js

Result :
========
mined Block 00000f0227462e4b16c31dba9d8d0b4996043e4fa5056c7eea382dca4cd398bf
mined Block 00003bf9a283c923dfb435f793865af1cdf65d54798171d15062670dc8ad7561

Validate blockchain
true

{
          "chain": [
                    {
                              "index": 0,
                              "timestamp": "30/5/2018",
                              "data": "Genesis",
                              "previousHash": "0",
                              "hash": "7ebd9f1c772438e1e2e54389045cb6cc54cc5749a162deaae98710ba579c0019",
                              "nonce": 0
                    },
                    {
                              "index": 1,
                              "timestamp": "30/5/2018",
                              "data": {
                                        "name": "Brajesh",
                                        "Amount": "$100"
                              },
                              "previousHash": "7ebd9f1c772438e1e2e54389045cb6cc54cc5749a162deaae98710ba579c0019",
                              "hash": "00000f0227462e4b16c31dba9d8d0b4996043e4fa5056c7eea382dca4cd398bf",
                              "nonce": 88564
                    },
                    {
                              "index": 2,
                              "timestamp": "31/5/2018",
                              "data": {
                                        "name": "Rajesh",
                                        "Amount": "$200"
                              },
                              "previousHash": "00000f0227462e4b16c31dba9d8d0b4996043e4fa5056c7eea382dca4cd398bf",
                              "hash": "00003bf9a283c923dfb435f793865af1cdf65d54798171d15062670dc8ad7561",
                              "nonce": 28345
                    }
          ],
          "difficulty": 4
}




