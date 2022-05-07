require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/ysFNq2mX0bqQlD9B4yL-tvBaPWpwJEH_',
      accounts: ['575fedca92f6f50a58a03093d4ebe3425d9477847c69aba4cc7f5ec15be5d064'],
    },
  },
};
