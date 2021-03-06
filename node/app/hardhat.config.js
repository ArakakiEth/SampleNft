const dotenv = require("dotenv").config();

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.4",
  settings: {
    optimizer: {
      enabled: true,
    },
  },
  networks: {
    localhost: {
      url: "http://localhost:8545",
      chainId: 31337,
    },
  },
};

