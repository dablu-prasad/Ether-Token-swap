require('babel-register');
require('babel-polyfill');


const HDWalletProvider=require('@truffle/hdwallet-provider');
const infuraKey='e55b832a28fc45498b65d1e91a2b9b4f';

const fs=require('fs');
const mnemonic=fs.readFileSync("./test/.secret").toString().trim();

module.exports = {

 networks: {
  // development: {
    // host: "127.0.0.1",     // Localhost (default: none)
     // port: 8545,            // Standard Ethereum port (default: none)
      //network_id: "*",       // Any network (default: none)
    //},
    // Useful for deploying to a public network.
    // NB: It's important to wrap the provider as a function.
    ropsten: {
      provider: () => new HDWalletProvider(mnemonic, `https://ropsten.infura.io/v3/${infuraKey}`),
      network_id: 3,       // Ropsten's id
      gas: 5500000,        // Ropsten has a lower block limit than mainnet
      confirmations: 2,    // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
    },
   },

  contracts_directory: './src/contracts/',
  contracts_build_directory: './src/abis/',
  compilers: {
    solc: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};
