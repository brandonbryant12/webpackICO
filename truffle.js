var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = 'alone gauge tube chunk fit bright drink gift still reward garlic depth';
module.exports = {
  networks: {
    development: {
      host: '127.0.0.1',
      port: 7545,
      network_id: '*' // Match any network id
    },
    ropsten: {
      gas: 500000,
      provider: function() {return new HDWalletProvider(mnemonic, "https://ropsten.infura.io/9IVwUjnwncMb0oQAHHIP", 0)},
      network_id: 3
    }
  }
}



