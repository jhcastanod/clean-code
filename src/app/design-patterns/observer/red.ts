import { IObserver } from './IObserver.interface';
import { Roulette } from './roulette';

export class Red implements IObserver {
  constructor(private readonly roulette: Roulette) {}

  update() {
    this.roulette.getValue();
  }
}