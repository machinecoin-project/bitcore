module.exports = {
  BTC: {
    lib: require('bitcore-lib'),
    p2p: require('bitcore-p2p')
  },
  BCH: {
    lib: require('bitcore-lib-cash'),
    p2p: require('bitcore-p2p-cash')
  },
  MAC: {
    lib: require('bitcore-lib-mac'),
    p2p: require('bitcore-p2p-mac')
  },
};
