import { IObserver } from './IObserver.interface';

export interface IObservable {
  add(observer: IObserver);
  remove(observer: IObserver);
  notify();
}