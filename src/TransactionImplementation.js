const SHA256 = require("crypto-js/sha256");

class Transaction{
    constructor(fromAddress, toAddress, amount){
        this.fromAddress = fromAddress;
        this.toAddress = toAddress;
        this.amount = amount;
    }
}

class Block {
    constructor(index, timestanp, data, previousHash){
        this.index = index;
        this.timestamp = timestanp;
        this.data = data;
        this.previousHash = previousHash;
        this.hash = this.generateHash();
        //nonce property for miner block
        this.nonce = 0;
    }


    generateHash() {
        // nonce preoperty added to update block in blockchain. 
        return SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data) + this.nonce).toString();
    }

    miningBlock(difficulty) {
        while(this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")) {
            //incrementing the nonce, everytime the loop runs.
            this.nonce++;
          
            //recalculating the hash value
            this.hash = this.generateHash();
        }
    }
}


class Blockchain{
    constructor() {
        this.chain = [this.createGenesisBlock()];
        this.difficulty = 2;
        this.pendingTransactions = [];
        this.miningReward = 100;
    }

    createGenesisBlock() {
        return new Block(0, '30/5/2018',[], '0');
    }

    getLatestBlock() {
        return this.chain[this.chain.length - 1];
    }

    minePendingTransactions(index, miningRewardAddress){
        let block = new Block(index, Date.now(), this.pendingTransactions, this.getLatestBlock().hash);
        block.miningBlock(this.difficulty);

        console.log('Block successfully mined!');
        this.chain.push(block);

        this.pendingTransactions = [
            new Transaction(null, miningRewardAddress, this.miningReward)
        ];
    }

    createTransaction(transaction){
        this.pendingTransactions.push(transaction);
    }

    getBalanceOfAddress(address){
        let balance = 0;

        for(const block of this.chain){
            for(const trans of block.data){
                if(trans.fromAddress === address){
                    balance -= trans.amount;
                }

                if(trans.toAddress === address){
                    balance += trans.amount;
                }
            }
        }
        return balance;
    }

    isValidTransaction(balance) {
        if(balance < 0) {
            return false
        }
        return true
    }

    isValidateBlock() {
        for (var i = 1; i < this.chain.length; i++) {
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i-1];
            if((currentBlock.hash !== currentBlock.generateHash()) || (currentBlock.previousHash !== previousBlock.hash)){
                return false;
            }
        }
        return true;
    }
}

let demoMinerCoin = new Blockchain();
demoMinerCoin.createTransaction(new Transaction('Brajesh Account', 'Amit Account', 10));
demoMinerCoin.createTransaction(new Transaction('Amit Account', 'Saurabh Account', 4));
demoMinerCoin.createTransaction(new Transaction('Amit Account', 'Brajesh Account', 2));

demoMinerCoin.minePendingTransactions(1, 'Brajesh Account');

console.log(JSON.stringify(demoMinerCoin, null, 100)); // last two parameter is used for JSON result indentation
console.log("=====================================================================================");

console.log('\nAmit Account balance is', demoMinerCoin.getBalanceOfAddress('Amit Account'));
console.log('\nSaurabh Account balance is', demoMinerCoin.getBalanceOfAddress('Saurabh Account'));
console.log('\nBrajesh Account balance is', demoMinerCoin.getBalanceOfAddress('Brajesh Account'));