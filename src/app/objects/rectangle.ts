import { Square } from './square';

export class Rectangle extends Square {
  base: number;
  height: number;

  setBase(base: number) {
    this.setWidth(base);
  }

  setSide(height: number) {
    this.setHeight(height);
  }
}