import { BaseModule } from '..';
import { MACStateProvider } from '../../providers/chain-state/mac/mac';
import { BitcoinP2PWorker } from './p2p';
import { VerificationPeer } from './VerificationPeer';

export default class BitcoinModule extends BaseModule {
  constructor(services: BaseModule['bitcoreServices']) {
    super(services);
    services.Libs.register('MAC', 'bitcore-lib-mac', 'bitcore-p2p-mac');
    services.P2P.register('MAC', BitcoinP2PWorker);
    services.CSP.registerService('MAC', new MACStateProvider());
    services.Verification.register('MAC', VerificationPeer);
  }
}
