import "@nomicfoundation/hardhat-toolbox";
import "dotenv/config";
import "./task/block-number";
import "hardhat-gas-reporter";
import "solidity-coverage";
import "@typechain/hardhat";

/** @type import('hardhat/config').HardhatUserConfig */

const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL;
const GOERLI_PRIVATE_KEY = process.env.GOERLI_PRIVATE_KEY;
const ETHERSCANAPIKEY = process.env.ETHERSCANAPIKEY;
const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY;

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    goerli: {
      url: GOERLI_RPC_URL,
      accounts: [GOERLI_PRIVATE_KEY],
      chainId: 5,
    },
  },
  solidity: "0.8.9",
  etherscan: {
    apiKey: ETHERSCANAPIKEY,
  },
  gasReporter: {
    enabled: true,
    outputFile: "gas-report.txt",
    currency: "USD",
    noColors: true,
    coinmarketcap: COINMARKETCAP_API_KEY,
  },
};
