import { IObservable } from './IObservable.interface';
import { IObserver } from './IObserver.interface';
import { RouletteValueModel } from './roulette.model';

export class Roulette implements IObservable {
  private observers: IObserver[];

  private value: RouletteValueModel;

  add(observer: IObserver) {
    this.observers.push(observer);
  }

  getValue(): RouletteValueModel {
    return this.value;
  }

  notify() {
    this.observers.forEach((observer: IObserver) => observer.update());
  }

  remove(observer: IObserver) {
    const indexOfObserver = this.observers.indexOf(observer);
    this.observers.splice(indexOfObserver, 1);
  }

  setValue(value: RouletteValueModel) {
    this.value = value;
  }
}