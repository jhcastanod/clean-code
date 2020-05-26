import { Strategy } from './strategy';

export class OptionStrategyA implements Strategy {
  execute(): string {
    const machineA = 'Play machine A';

    return machineA;
  }
}