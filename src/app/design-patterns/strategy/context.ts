import { OptionStrategyA } from './optionStrategyA';

export class Context {
  optionStrategyA: OptionStrategyA;

  constructor(public readonly optStgA: OptionStrategyA) {
    this.optionStrategyA = optStgA;
  }
}