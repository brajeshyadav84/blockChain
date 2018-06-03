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

3. BlockChain Transaction
========================================================>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
run application use below command
node src/TransactionImplementation.js

Result :
========
Block successfully mined!

{
          "chain": [
                    {
                              "index": 0,
                              "timestamp": "30/5/2018",
                              "data": [],
                              "previousHash": "0",
                              "hash": "33b5bc790659f2281b26b1547c6261aef85bdf0c060574aef090f5eb990a3440",
                              "nonce": 0
                    },
                    {
                              "index": 1,
                              "timestamp": 1528017125564,
                              "data": [
                                        {
                                                  "fromAddress": "Brajesh Account",
                                                  "toAddress": "Amit Account",
                                                  "amount": 10
                                        },
                                        {
                                                  "fromAddress": "Amit Account",
                                                  "toAddress": "Saurabh Account",
                                                  "amount": 4
                                        },
                                        {
                                                  "fromAddress": "Amit Account",
                                                  "toAddress": "Brajesh Account",
                                                  "amount": 2
                                        }
                              ],
                              "previousHash": "33b5bc790659f2281b26b1547c6261aef85bdf0c060574aef090f5eb990a3440",
                              "hash": "005ed193e3b4cd9335f50b4e413638b4114da9b327845b66fdd9ba54eddcabf9",
                              "nonce": 3
                    }
          ],
          "difficulty": 2,
          "pendingTransactions": [
                    {
                              "fromAddress": null,
                              "toAddress": "Brajesh Account",
                              "amount": 100
                    }
          ],
          "miningReward": 100
}
=====================================================================================

Amit Account balance is 4

Saurabh Account balance is 4

Brajesh Account balance is -8



