class LibProvider {
  libs = {
    BTC: {
      lib: require('bitcore-lib'),
      p2p: require('bitcore-p2p')
    },
    MAC: {
      lib: require('bitcore-lib-mac'),
      p2p: require('bitcore-p2p-mac')
    }
  };

  register(chain: string, lib: string, p2p: string) {
    this.libs[chain] = { lib: require(lib), p2p: require(p2p) };
  }

  get(chain) {
    return this.libs[chain];
  }
}

export const Libs = new LibProvider();
