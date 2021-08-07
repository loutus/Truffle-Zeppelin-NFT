const HDWalletProvider = require("truffle-hdwallet-provider");
const { mnemonic, projectId } = require('./secret.json');

module.exports = {
  networks: {
    ropsten: {
      provider: function() {
        return new HDWalletProvider(mnemonic, `https://ropsten.infura.io/v3/${projectId}`)
      },
      network_id: "3"
    }
  }
}
