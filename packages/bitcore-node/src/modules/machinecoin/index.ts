import { BaseModule } from '..';
import { MACStateProvider } from '../../providers/chain-state/mac/mac';
import { BitcoinP2PWorker } from '../bitcoin/p2p';
import { VerificationPeer } from '../bitcoin/VerificationPeer';

export default class MACModule extends BaseModule {
  constructor(services) {
    super(services);
    services.Libs.register('MAC', 'bitcore-lib-mac', 'bitcore-p2p-mac');
    services.P2P.register('MAC', BitcoinP2PWorker);
    services.CSP.registerService('MAC', new MACStateProvider());
    services.Verification.register('MAC', VerificationPeer);
  }
}
