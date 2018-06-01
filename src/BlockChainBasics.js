const SHA256 = require("crypto-js/sha256");

class Block {
	constructor(index, timestanp, data, previousHash){
		this.index = index;
		this.timestamp = timestanp;
		this.data = data;
		this.previousHash = previousHash;
		this.hash = this.generateHash();
	}

	generateHash() {
      return SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data)).toString();
    }
}

class BlockChain {
	constructor(){
		this.chain = [this.generateGenesisBlock()]
	}

	generateGenesisBlock(){
		return new Block(0, '30/5/2018','Genesis', '0');
	}

	getLatestBlock(){
		return this.chain[this.chain.length-1]
	}

	addBlock(newBlock){
		newBlock.previousHash = this.getLatestBlock().hash;
		newBlock.hash = newBlock.generateHash();
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

let demoCoin = new BlockChain();
demoCoin.addBlock(new Block(1,'30/5/2018', {name:'Brajesh',Amount:'$100'}))
demoCoin.addBlock(new Block(2,'31/5/2018', {name:'Rajesh',Amount:'$200'}))

console.log("Validate blockchain");
console.log(demoCoin.isValidateBlock());

console.log(JSON.stringify(demoCoin, null, 100));