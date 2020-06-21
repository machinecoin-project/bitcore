import { InternalStateProvider } from '../internal/internal';

export class MACStateProvider extends InternalStateProvider {
  constructor(chain: string = 'MAC') {
    super(chain);
  }
}
