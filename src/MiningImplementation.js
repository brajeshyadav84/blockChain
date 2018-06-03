const SHA256 = require("crypto-js/sha256");

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
        console.log("mined Block " + this.hash);
    }
}

class BlockChain {
	constructor(){
		this.chain = [this.generateGenesisBlock()];
		this.difficulty = 4;
	}

	generateGenesisBlock(){
		return new Block(0, '30/5/2018','Genesis', '0');
	}

	getLatestBlock(){
		return this.chain[this.chain.length-1]
	}

	addBlock(newBlock){
		newBlock.previousHash = this.getLatestBlock().hash;
		newBlock.miningBlock(this.difficulty);
		this.chain.push(newBlock);
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

let demoMinerCoin = new BlockChain();
demoMinerCoin.addBlock(new Block(1,'30/5/2018', {name:'Brajesh',Amount:'$100'}));
demoMinerCoin.addBlock(new Block(2,'31/5/2018', {name:'Rajesh',Amount:'$200'}));

console.log("Validate blockchain");
console.log(demoMinerCoin.isValidateBlock());

console.log(JSON.stringify(demoMinerCoin, null, 100)); // last two parameter is used for JSON result indentation